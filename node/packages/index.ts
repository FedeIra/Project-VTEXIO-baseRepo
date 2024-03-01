// import and export all variables from all directories in packages:
import * as ExternalClientVariables from './externalClientPackages/variablesExternalClient'
import * as ExternalClient2Variables from './externalClient2Packages/variablesExternalClient2'
import * as GeneralVariables from './generalPackages/variablesGeneral'
import * as VtexVariables from './vtexClientPackages/variablesVtex'
import * as AWSVariables from './awsClientPackages/variablesAWS'

export {
  ExternalClientVariables,
  ExternalClient2Variables,
  GeneralVariables,
  VtexVariables,
  AWSVariables,
}
