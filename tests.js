const { test } = require('@ianwalter/bff')

test('version', t => t.expect(process.version).toBeDefined())
