declare namespace NodeJS {

  type APP_EnvironmentVariables = {
    [key in keyof typeof import('@resources/sls.environment')]: string
  }

  interface ProcessEnv extends APP_EnvironmentVariables {}

}
