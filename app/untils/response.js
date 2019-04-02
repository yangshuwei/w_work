const format = (data, code = 0, msg = 'ok') => {
  return {
    code,
    msg,
    data
  }
}

module.exports = { format }

