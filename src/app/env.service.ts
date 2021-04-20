export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = 'http://localhost:8000/api';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {
  }

}
