// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { RequestContext, HttpMethod, ResponseContext} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import { User } from '../models/User';

export class UserApiRequestFactory extends BaseAPIRequestFactory {
	// TODO: allow passing of Configuration via Options (=> overwrites config set for this request factory
	
    public createUser(user: User, options?: any): RequestContext {
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling createUser.');
        }

		
		// Path Params
    	const localVarPath = '/user';

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
        // TODO: deal with this? Could be useful for server definition
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"User" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public createUsersWithArrayInput(user: Array<User>, options?: any): RequestContext {
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling createUsersWithArrayInput.');
        }

		
		// Path Params
    	const localVarPath = '/user/createWithArray';

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
        // TODO: deal with this? Could be useful for server definition
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"Array&lt;User&gt;" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public createUsersWithListInput(user: Array<User>, options?: any): RequestContext {
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling createUsersWithListInput.');
        }

		
		// Path Params
    	const localVarPath = '/user/createWithList';

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
        // TODO: deal with this? Could be useful for server definition
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"Array&lt;User&gt;" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public deleteUser(username: string, options?: any): RequestContext {
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling deleteUser.');
        }

		
		// Path Params
    	const localVarPath = '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public getUserByName(username: string, options?: any): RequestContext {
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling getUserByName.');
        }

		
		// Path Params
    	const localVarPath = '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public loginUser(username: string, password: string, options?: any): RequestContext {
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling loginUser.');
        }

        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new RequiredError('Required parameter password was null or undefined when calling loginUser.');
        }

		
		// Path Params
    	const localVarPath = '/user/login';

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            
        // Query Params
        if (username !== undefined) {
        	requestContext.setQueryParam("", ObjectSerializer.serialize(username, "string"));
        }
        if (password !== undefined) {
        	requestContext.setQueryParam("", ObjectSerializer.serialize(password, "string"));
        }
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public logoutUser(options?: any): RequestContext {
		
		// Path Params
    	const localVarPath = '/user/logout';

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
    public updateUser(username: string, user: User, options?: any): RequestContext {
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new RequiredError('Required parameter username was null or undefined when calling updateUser.');
        }

        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new RequiredError('Required parameter user was null or undefined when calling updateUser.');
        }

		
		// Path Params
    	const localVarPath = '/user/{username}'
            .replace('{' + 'username' + '}', encodeURIComponent(String(username)));

		// Make Request Context
    	const requestContext = this.configuration.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
            
        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        requestContext.setHeaderParam("Content-Type", "application/json");
        // TODO: deal with this? Could be useful for server definition
		// TODO: Should this be handled by ObjectSerializer? imo yes => confidential information included in local object should not be sent
        const needsSerialization = (<any>"User" !== "string") || requestContext.getHeaders()['Content-Type'] === 'application/json';
        const serializedBody = needsSerialization ? JSON.stringify(user || {}) : (user.toString() || ""); // TODO: `toString` call is unnecessary
        requestContext.setBody(serializedBody);
		
    	// Apply auth methods
    	
    	return requestContext;
    }
			
}

// TODO: find way to split these two files (both dependent on apitemplatefiles)



export class UserApiResponseProcessor {
	
	/**
	 *
	 * @throws  if the httpStatusCode is not in [200, 299]
	 */
    public createUser(response: ResponseContext):   void  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        // TODO: make this based on status code!
        if (!responseOK) {
        	throw new Error("Invalid status code: " + response.httpStatusCode + "!");
        }
    }
			
	/**
	 *
	 * @throws  if the httpStatusCode is not in [200, 299]
	 */
    public createUsersWithArrayInput(response: ResponseContext):   void  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        // TODO: make this based on status code!
        if (!responseOK) {
        	throw new Error("Invalid status code: " + response.httpStatusCode + "!");
        }
    }
			
	/**
	 *
	 * @throws  if the httpStatusCode is not in [200, 299]
	 */
    public createUsersWithListInput(response: ResponseContext):   void  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        // TODO: make this based on status code!
        if (!responseOK) {
        	throw new Error("Invalid status code: " + response.httpStatusCode + "!");
        }
    }
			
	/**
	 *
	 * @throws  if the httpStatusCode is not in [200, 299]
	 */
    public deleteUser(response: ResponseContext):   void  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        // TODO: make this based on status code!
        if (!responseOK) {
        	throw new Error("Invalid status code: " + response.httpStatusCode + "!");
        }
    }
			
	/**
	 *
	 * @throws User if the httpStatusCode is not in [200, 299]
	 */
    public getUserByName(response: ResponseContext):  User  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        const body: User = ObjectSerializer.deserialize(response.body, "User") as User;
        if (responseOK) {
			return body;
        } else {
        	// TODO: deal with different errors based on httpStatusCode
        	throw body
        }
    }
			
	/**
	 *
	 * @throws string if the httpStatusCode is not in [200, 299]
	 */
    public loginUser(response: ResponseContext):  string  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        const body: string = ObjectSerializer.deserialize(response.body, "string") as string;
        if (responseOK) {
			return body;
        } else {
        	// TODO: deal with different errors based on httpStatusCode
        	throw body
        }
    }
			
	/**
	 *
	 * @throws  if the httpStatusCode is not in [200, 299]
	 */
    public logoutUser(response: ResponseContext):   void  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        // TODO: make this based on status code!
        if (!responseOK) {
        	throw new Error("Invalid status code: " + response.httpStatusCode + "!");
        }
    }
			
	/**
	 *
	 * @throws  if the httpStatusCode is not in [200, 299]
	 */
    public updateUser(response: ResponseContext):   void  {
    	const responseOK = response.httpStatusCode && response.httpStatusCode >= 200 && response.httpStatusCode <= 299;
        // TODO: make this based on status code!
        if (!responseOK) {
        	throw new Error("Invalid status code: " + response.httpStatusCode + "!");
        }
    }
			
}
