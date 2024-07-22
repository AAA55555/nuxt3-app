export const mockAPI = getEnvVar('NUXT_MOCK_API')

function getEnvVar(key: string) {
  console.log(import.meta.env)
  const envVar = import.meta.env[key]
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return envVar
}
