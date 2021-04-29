# httpcode



httpcode is a small library to handle http code status convention.



### HTTP Code enumerations

​	`HTTP_CODE_INFORMATION` contains all http code 1xx

​	`HTTP_CODE_SUCCESS` contains all http code 2xx

​	`HTTP_CODE_REDIRECTION` contains all http code 3xx

​	`HTTP_CODE_CLIENT_ERROR` contains all http code 4xx

​	`HTTP_CODE_SERVER_ERROR` contains all http code 5xx

​	`HTTP_CODE` contains all http code



### HTTP Code type

​	`HTTPCodeInformation`

​	`HTTPCodeSuccess`

​	`	HTTPCodeRedirection`

​	`HTTPCodeClientError`

​	`	HTTPCodeServerError`

​	`	HTTPCode`



### HTTP Code type guard

​	`isHttpCodeInformation :: (data: any) => data is HTTPCodeInformation`

​	`isHttpCodeSuccess :: (data: any) => data is HTTPCodeSuccess`

​	`	isHttpCodeRedirection :: (data: any) => data is HTTPCodeRedirection`

​	`	isHttpCodeClientError :: (data: any) => data is HTTPCodeClientError`

​	`isHttpCodeServerError :: (data: any) => data is HTTPCodeServerError`



### Example 

#### 	Type guard

​		`isHttpCodeInformation(HTTP_CODE.OK)// returns false` 

​		`isHttpCodeInformation(HTTP_CODE.PROCESSING) // returns true`

#### 	Http code

​		`const myHttpCode = HTTP_CODE.OK // 200` 
