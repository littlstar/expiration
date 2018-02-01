'use strict';

const test = require('ava')
const ExpiringList = require('../')

test.cb(`expires in 10s`, t => {
  t.plan(2)
  const expireTest = new ExpiringList()

  expireTest.add('test', 5000)

  t.is(expireTest.length, 1)

  setTimeout(() => {
    t.is(expireTest.length, 0)
    t.end()
  }, 6000)
})

test.cb(`default expiration (60s)`, t => {
  t.plan(2)
  const expireTest = new ExpiringList()

  expireTest.add('test')

  t.is(expireTest.length, 1)

  setTimeout(() => {
    t.is(expireTest.length, 0)
    t.end()
  }, 70000)
})

test(`list`, t => {
  t.plan(1)

  const expireTest = new ExpiringList()

  expireTest.add('test')

  const list = expireTest.list

  t.is(list[0], 'test')
})