import React from 'react'

function Info() {
    return (
        <div>
            <article>
                <h1 dir="auto">Frontend technical test</h1>
                <p dir="auto">
                    This test is a part of our hiring process for the Frontend Engineer position. It should
                    take you between 6 to 8 hours, depending on your experience, to implement the minimal
                    version. But we thought about a few bonuses, so feel free to spend some time on them if
                    you want.
                </p>
                <p dir="auto">
                    We want you to keep the code organized as much as you can and best as you can, you can
                    even download this code by following for local development in your own ide
                    <img
                        style={{ width: "100%", height: "auto" }}
                        src="https://raw.githubusercontent.com/ashfahan/React-test/2e89c003e4b66bef2ec83be96e3c2dd3f60906fc/files/download.png"
                        alt="download"
                    />
                </p>
                <h2 dir="auto">
                    <a href="#exercise" />
                    Hint
                </h2>
                <ul>
                    <li>Start by creating UI</li>
                    <li>Read documents again and again and understand Api calls</li>
                    <li>Organize Api calls/code in differnt files</li>
                    <li>Open network tab in browser tools and understand api call and their response</li>
                    <li>
                        <b>
                            IF YOU ARE STUCK ANYWHERE USE CONSOLE LOG EXTENSIVELY AND UNDERSTAND WHAT YOU DOING
                            AND WHAT YOU GETTING
                        </b>
                    </li>
                </ul>
                <h2 dir="auto">
                    <a href="#exercise" />
                    Exercise
                </h2>
                <p dir="auto">
                    For the purpose of this test, you can use Bootstrap, Material or Ant Design for the base
                    design library. Copy Styling of different components such as buttons, lists, fields etc.
                    from the assets in the <code>/files</code> folder.
                </p>
                <p dir="auto">This application must:</p>
                <ul dir="auto">
                    <li>Display a paginated list of calls that you’ll retrieve from the API.</li>
                    <li>
                        Display the call details view if the user clicks on a call. the view should display all
                        the data related to the call itself.
                    </li>
                    <li>Be able to archive one or several calls</li>
                    <li>Group calls by date</li>
                </ul>
                <p dir="auto">Bonus:</p>
                <ul dir="auto">
                    <li>Use Typescript</li>
                    <li>Provide filtering feature, to filter calls by type (archived, missed …)</li>
                    <li>Use GraphQL to fetch data</li>
                </ul>
                <p dir="auto">
                    <strong>Important Note</strong>: We want you to build this small app as you'd have done it
                    for your current job. (UI, UX, tests, documentation matters).
                </p>
                <h2 dir="auto">
                    <a href="#apis" />
                    APIs
                </h2>
                <p dir="auto">There are 2 versions of the APIs for this test, so you can choose between:</p>
                <ul dir="auto">
                    <li>REST API or</li>
                    <li>GraphQL API.</li>
                </ul>
                <p dir="auto">Both expose the same data, so it’s really about which one you prefer.</p>
                <h3 dir="auto">
                    <a href="#model" />
                    Model
                </h3>
                <p dir="auto">Both APIs use the same models.</p>
                <p dir="auto">Call Model</p>
                <div>
                    <pre>
                        <code>
                            type Call {"{"}
                            {"\n"} id: ID! // "unique ID of call"{"\n"} direction: String! // "inbound" or
                            "outbound" call{"\n"} from: String! // Caller's number{"\n"} to: String! // Callee's
                            number{"\n"} duration: Float! // Duration of a call (in seconds){"\n"} is_archived:
                            Boolean! // Boolean that indicates if the call is archived or not{"\n"} call_type:
                            String! // The type of the call, it can be a missed, answered or voicemail.{"\n"} via:
                            String! // Aircall number used for the call.{"\n"} created_at: String! // When the
                            call has been made.{"\n"} notes: Note[]! // Notes related to a given call{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">Note Model</p>
                <div>
                    <pre>
                        <code>
                            type Note {"{"}
                            {"\n"} id: ID!{"\n"} content: String!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <h3 dir="auto">
                    <a href="#graphql-api-for-rest-api-scroll-down" />
                    GraphQL API (For REST API, scroll down)
                </h3>
                <p dir="auto">
                    Base URL:{" "}
                    <a href="https://frontend-test-api.aircall.io/graphql" rel="nofollow">
                        https://frontend-test-api.aircall.io/graphql
                    </a>
                </p>
                <h4 dir="auto">
                    <a href="#authentication" />
                    Authentication
                </h4>
                <p dir="auto">
                    You must first authenticate yourself before requesting the API. You can do so by executing
                    the Login mutation. See below.
                </p>
                <h4 dir="auto">
                    <a href="#queries" />
                    Queries
                </h4>
                <p dir="auto">
                    All the queries are protected by a middleware that checks if the user is authenticated
                    with a valid JWT.
                </p>
                <p dir="auto">
                    <code>paginatedCalls</code> returns a list of paginated calls. You can fetch the next page
                    of calls by changing the values of <code>offset</code> and <code>limit</code> arguments.
                </p>
                <div>
                    <pre>
                        <code>
                            paginatedCalls({"\n"} offset: Float = 0{"\n"} limit: Float = 10
                            {"\n"}): PaginatedCalls!{"\n"}type PaginatedCalls {"{"}
                            {"\n"} nodes: [Call!]{"\n"} totalCount: Int!{"\n"} hasNextPage: Boolean!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>activitiy</code> returns a single call if any, otherwise it returns null.
                </p>
                <div>
                    <pre>
                        <code>call(id: Float!): Call{"\n"}</code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>me</code> returns the currently authenticated user.
                </p>
                <div>
                    <pre>
                        <code>me: UserType!{"\n"}</code>
                    </pre>
                </div>
                <div>
                    <pre>
                        <code>
                            type UserType {"{"}
                            {"\n"} id: String!{"\n"} username: String!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <h4 dir="auto">
                    <a href="#mutations" />
                    Mutations
                </h4>
                <p dir="auto">
                    To be able to grab a valid JWT token, you need to execute the <code>login</code> mutation.
                </p>
                <p dir="auto">
                    <code>login</code> receives the username and password as 1st parameter and return the
                    access_token and the user identity.
                </p>
                <div dir="auto">
                    <pre>
                        login(input: LoginInput!): AuthResponseType!{"\n"}input LoginInput {"{"}
                        {"\n"} username: String!{"\n"} password: String!{"\n"}
                        {"}"}
                        {"\n"}interface AuthResponseType {"{"}
                        {"\n"} access_token: String!{"\n"} user: UserType{"\n"}
                        {"}"}
                    </pre>
                </div>
                <p dir="auto">
                    Once you are correctly authenticated you need to pass the Authorization header for all the
                    next calls to the GraphQL API.
                </p>
                <div dir="auto">
                    <pre>
                        {"{"}
                        {"\n"} "Authorization": "Bearer &lt;YOUR_ACCESS_TOKEN&gt;"{"\n"}
                        {"}"}
                    </pre>
                </div>
                <p dir="auto">
                    Note that the access_token is only available for 10 minutes. You need to ask for another
                    fresh token by calling the <code>refreshToken</code> mutation before the token gets
                    expired.
                </p>
                <p dir="auto">
                    <code>refreshToken</code> allows you to ask for a new fresh token based on your existing
                    access_token
                </p>
                <div dir="auto">
                    <pre>refreshToken: AuthResponseType!</pre>
                </div>
                <p dir="auto">
                    This will send you the same response as the <code>login</code> mutation.
                </p>
                <p dir="auto">You must use the new token for the new requests made to the API.</p>
                <p dir="auto">
                    <code>archiveCall</code> as the name implies it either archive or unarchive a given
                    call.If the call doesn't exist, it'll throw an error.
                </p>
                <div>
                    <pre>
                        <code>archiveCall(id: ID!): Call!{"\n"}</code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>addNote</code> create a note and add it prepend it to the call's notes list.
                </p>
                <div>
                    <pre>
                        <code>
                            addNote(input: AddNoteInput!): Call!{"\n"}input AddNoteInput {"{"}
                            {"\n"} activityId: ID!{"\n"} content: String!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>

                <h3 dir="auto">
                    <a href="#rest-api" />
                    REST API
                </h3>
                <p dir="auto">
                    Base URL:{" "}
                    <a href="https://frontend-test-api.aircall.io" rel="nofollow">
                        https://frontend-test-api.aircall.io
                    </a>
                </p>
                <h4 dir="auto">
                    <a href="authentication-1" />
                    Authentication
                </h4>
                <p dir="auto">
                    You must first authenticate yourself before requesting the API. You can do so by sending a
                    POST request to <code>/auth/login</code>. See below.
                </p>
                <h4 dir="auto">
                    <a href="#get-endpoints" />
                    GET endpoints
                </h4>
                <p dir="auto">
                    All the endpoints are protected by a middleware that checks if the user is authenticated
                    with a valid JWT.
                </p>
                <p dir="auto">
                    <code>GET</code> <code>/calls</code> returns a list of paginated calls. You can fetch the
                    next page of calls by changing the values of <code>offset</code> and <code>limit</code>{" "}
                    arguments.
                </p>
                <div>
                    <pre>
                        <code>/calls?offset=&lt;number&gt;&amp;limit=&lt;number&gt;{"\n"}</code>
                    </pre>
                </div>
                <p dir="auto">Response:</p>
                <div>
                    <pre>
                        <code>
                            {"{"}
                            {"\n"} nodes: [Call!]{"\n"} totalCount: Int!{"\n"} hasNextPage: Boolean!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>GET</code> <code>/calls/:id</code> return a single call if any, otherwise it returns
                    null.
                </p>
                <div>
                    <pre>
                        <code>/calls/:id&lt;uuid&gt;{"\n"}</code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>GET</code> <code>/me</code> return the currently authenticated user.
                </p>
                <div>
                    <pre>
                        <code>/me{"\n"}</code>
                    </pre>
                </div>
                <p dir="auto">Response</p>
                <div>
                    <pre>
                        <code>
                            {"{"}
                            {"\n"} id: String!{"\n"} username: String!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <h4 dir="auto">
                    <a href="#post-endpoints" />
                    POST endpoints
                </h4>
                <p dir="auto">
                    To be able to grab a valid JWT token, you need to call the following endpoint:
                </p>
                <p dir="auto">
                    <code>POST</code> <code>/auth/login</code> receives the username and password in the body
                    and returns the access_token and the user identity.
                </p>
                <div>
                    <pre>
                        <code>
                            /auth/login{"\n"}// body{"\n"}
                            {"{"}
                            {"\n"} username: String!{"\n"} password: String!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">
                    Once you are correctly authenticated you need to pass the Authorization header for all the
                    next calls to the REST API.
                </p>
                <div dir="auto">
                    <pre>
                        {"{"}
                        {"\n"} "Authorization": "Bearer &lt;YOUR_ACCESS_TOKEN&gt;"{"\n"}
                        {"}"}
                    </pre>
                </div>
                <p dir="auto">
                    Note that the access_token is only available for 10 minutes. You need to ask for another
                    fresh token by calling the <code>/auth/refresh-token</code> endpoint before the token gets
                    expired.
                </p>
                <p dir="auto">
                    <code>POST</code> <code>/auth/refresh-token</code> allows you to ask for a new fresh token
                    based on your existing access_token
                </p>
                <p dir="auto">
                    This will return the same response as the <code>/auth/login</code> resource.
                </p>
                <p dir="auto">You must use the new token for the new requests made to the API.</p>
                <p dir="auto">
                    <code>POST</code> <code>/calls/:id/note</code> create a note and add it prepend it to the
                    call's notes list.
                </p>
                <div>
                    <pre>
                        <code>
                            `/calls/:id/note`{"\n"}Body{"\n"}
                            {"{"}
                            {"\n"} content: String!{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">
                    It returns the <code>Call</code> as a response or an error if the note doesn't exist.
                </p>
                <h4 dir="auto">
                    <a href="#put-endpoints" />
                    PUT endpoints
                </h4>
                <p dir="auto">
                    <code>PUT</code> <code>/calls/:id/archive</code> as the name implies it either archive or
                    unarchive a given call. If the call doesn't exist, it'll throw an error.
                </p>
                <div>
                    <pre>
                        <code>PUT /calls/:id/archive{"\n"}</code>
                    </pre>
                </div>
                <h4 dir="auto">
                    <a href="#errors" />
                    Errors
                </h4>
                <p dir="auto">The REST API can return a different type of errors:</p>
                <p dir="auto">
                    <code>400</code> <code>BAD_REQUEST</code> error, happens when you provide some data which
                    doesn't respect a given shape.
                </p>
                <p dir="auto">Example</p>
                <div>
                    <pre>
                        <code>
                            {"{"}
                            {"\n"} "statusCode": 400,{"\n"} "message": [{"\n"} "content must be a string",{"\n"}{" "}
                            "content should not be empty"{"\n"} ],{"\n"} "error": "Bad Request"{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>401</code> <code>UNAUTHORIZED</code> error, happens when the user is not authorized
                    to perform an action or if his token is no longer valid
                </p>
                <p dir="auto">Example</p>
                <div>
                    <pre>
                        <code>
                            {"{"}
                            {"\n"} "statusCode": 401,{"\n"} "message": "Unauthorized"{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <p dir="auto">
                    <code>404</code> <code>NOT_FOUND</code> error, happens when the user requests a resource
                    that no longer exists.
                </p>
                <p dir="auto">Example</p>
                <div>
                    <pre>
                        <code>
                            {"{"}
                            {"\n"} "statusCode": 404,{"\n"} "message": "The call does not exist!",{"\n"} "error":
                            "Not Found"{"\n"}
                            {"}"}
                            {"\n"}
                        </code>
                    </pre>
                </div>
                <h2 dir="auto">
                    <a href="#does-your-ui-looks-like-the-image-below" />
                    Does your UI looks like the image below?
                </h2>
                <h3 dir="auto">
                    <a href="#if-yes-then-youre-doing-better-than-60-of-the-applicants" />
                    If YES then you're doing better than 60% of the applicants.
                </h3>
                <p dir="auto">
                    <a
                        href="https://raw.githubusercontent.com/ashfahan/React-test/main/files/Calls%20List%20-%20Filtered%20Results.png"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        <img
                            style={{ width: "100%", height: "auto" }}
                            src="https://raw.githubusercontent.com/ashfahan/React-test/main/files/Calls%20List%20-%20Filtered%20Results.png"
                            alt="Calls List"
                        />
                    </a>
                </p>
                <h2 dir="auto">
                    <a href="#code-submit" />
                    Code Submit
                </h2>
                <p dir="auto">
                    Please organize, design, test your code, and then just share the browser link in mail but
                    if you have downloaded this code make a zip of it or push it to github and send us a link
                    or email to <a href="mailto:work@ashfahan.com">work@ashfahan.com</a> We will review it and
                    get back to you in order to talk about your code!
                </p>
                <p dir="auto">All the best and happy coding.</p>
            </article>
        </div>
    )
}

export default Info