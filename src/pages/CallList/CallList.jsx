import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Table, Tag, Button, Modal, Input, Form } from 'antd';
import { GetPaginatedCalls, AddNote, ArchiveCall } from "../../Api/Api"
import moment from 'moment/moment';
const { TextArea } = Input;
function CallList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data2, setData] = useState({})
    const [calls, setCalls] = useState([])
    const [duration, setDuration] = useState("")
    const [calltype, setCallType] = useState("")
    const [via, setVia] = useState("")
    const [to, setTo] = useState("")
    const [from, setFrom] = useState("")
    const [created, setCreated] = useState("")
    const [id, setId] = useState("")
    const [notes, setNote] = useState("")
    const [getNotes, setNotes] = useState([])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        await AddNote(id, notes)
        let calls = await GetPaginatedCalls()

        setCalls(calls?.data)
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    console.log(notes, "note")
    useEffect(() => {
        async function getcalls() {
            let calls = await GetPaginatedCalls()

            setCalls(calls?.data)
        }
        getcalls()
    }, [])

    const columns = [
        {
            title: 'CallType',
            dataIndex: 'call_type',
            key: 'call_type',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Direction',
            dataIndex: 'direction',
            key: 'direction',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
        }, {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
        }, {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
        }, {
            title: 'VIA',
            dataIndex: 'via',
            key: 'via',
        }, {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text) => {
                return (
                    <p style={{ fontSize: "12px" }}>
                        {moment(text).format("DD-MM-YYYY")}
                    </p>
                )
            },
            filters: [
                {
                    text: "Month 12",
                    value: "12"
                }
            ],
            onFilter: (value, record) => moment(record.created_at).format("M") === value,
            filterSearch: true,
            width: '40%',
        }, {
            title: 'Status',
            dataIndex: 'is_archived',
            key: 'is_archived',
            render: (_, { id, is_archived }) => {

                let color = is_archived ? 'Green' : 'Red';

                return (

                    <Button
                        onClick={async () => {
                            await ArchiveCall(id)
                            let calls = await GetPaginatedCalls();
                            setCalls(calls?.data)
                        }}
                        style={{ backgroundColor: `${color}`, border: "none" }}>
                        {is_archived ? "Archived" : "Unarchived"}
                    </Button>

                );

            },
            filters: [
                {
                    text: "Archive",
                    value: true
                },
                {
                    text: "Unarchive",
                    value: false
                }
            ],
            onFilter: (value, record) => record.is_archived === value,
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record, key) => {

                return (

                    <div>
                        <Button onClick={() => {
                            setId(record.id)
                            setDuration(record.duration)
                            setCallType(record.call_type)
                            setVia(record.via)
                            setFrom(record.from)
                            setTo(record.to)
                            setCreated(record.created)

                            showModal()

                        }}>

                            Add Note
                        </Button>
                        <Modal
                            closable={false}

                            open={isModalOpen} footer={null} >
                            <p>
                                Add Notes
                            </p>
                            <p style={{ color: "blue" }}>
                                Call ID {id}
                            </p>
                            <hr />
                            <p>Call Type {calltype}</p>
                            <p>Duration {Math.floor(duration / 60).toString().padStart(2, '0')} minutes {duration % 60} seconds</p>
                            <p>From {from}</p>
                            <p> To {to} </p>
                            <p>Via {via}</p>
                            <p>
                                Notes
                            </p>



                            <Form
                                name="form_name"
                                fields={[
                                    {
                                        name: ["fieldName"],
                                        value: notes,
                                    },
                                ]}
                            >
                                <Form.Item name="fieldName">

                                    <TextArea
                                        onChange={(e) => {

                                            setNote(e.target.value)
                                        }}


                                        rows={4} />
                                </Form.Item>
                            </Form>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <Button onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button onClick={handleOk}>
                                    Save
                                </Button>
                            </div>

                        </Modal>

                    </div >

                )
            },
        },
    ];

    const dataCall = calls
    return (
        <div>

            <Header />
            <h1>
                Frontend Test
            </h1>
            <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
                <Table
                    pagination={true}
                    columns={columns} dataSource={dataCall} />
            </div>

        </div>
    )
}

export default CallList