const getHost = () => window.location.origin
const buildUrl = (url) => `${getHost()}${process.env.urlPostfix}/${url}`

export { getHost, buildUrl }
