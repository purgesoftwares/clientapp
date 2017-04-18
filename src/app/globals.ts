//
// ===== File globals.ts    
//
'use strict';

export const sep='/';
export const version: string="22.2.2";    
export const apiServerUrl = "http://54.161.216.233";
export const apiServerPort = "8090";
export const apiBasePath = "api";
export const apiSecuredPath = "secured";

export const apiUrl = apiServerUrl+":"+apiServerPort+"/"+apiBasePath;
export const apiSecureUrl = apiServerUrl + ":" + apiServerPort + "/" + apiBasePath + "/" + apiSecuredPath;

export const providerAppUrl = "http://localhost:4200";