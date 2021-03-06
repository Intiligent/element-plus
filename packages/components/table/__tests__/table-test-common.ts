import { nextTick } from 'vue'
import { mount as _mount } from '@vue/test-utils'

jest.mock('lodash-unified', () => {
  return {
    ...(jest.requireActual('lodash-unified') as Record<string, any>),
    debounce: jest.fn((fn) => {
      fn.cancel = jest.fn()
      fn.flush = jest.fn()
      return fn
    }),
  }
})

export async function doubleWait() {
  await nextTick()
  await nextTick()
}

export const mount = (opt: any) =>
  _mount<any>(opt, {
    attachTo: 'body',
  })

export function getTestData() {
  return [
    {
      id: 1,
      name: 'Toy Story',
      release: '1995-11-22',
      director: 'John Lasseter',
      runtime: 80,
    },
    {
      id: 2,
      name: "A Bug's Life",
      release: '1998-11-25',
      director: 'John Lasseter',
      runtime: 95,
    },
    {
      id: 3,
      name: 'Toy Story 2',
      release: '1999-11-24',
      director: 'John Lasseter',
      runtime: 92,
    },
    {
      id: 4,
      name: 'Monsters, Inc.',
      release: '2001-11-2',
      director: 'Peter Docter',
      runtime: 92,
    },
    {
      id: 5,
      name: 'Finding Nemo',
      release: '2003-5-30',
      director: 'Andrew Stanton',
      runtime: 100,
    },
  ]
}

// https://stackoverflow.com/a/59864054/2198656
describe('test util does not need jest testing', () => {
  it.skip('too lazy to change jest match config', () => {
    // nothing!
  })
})
