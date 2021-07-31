import { mount } from 'enzyme'
import Link from '.'

describe('<Button />', () => {
  it('should correctly render a <h1 /> element', () => {
    const component = mount(<Link href="/" />)

    expect(component.find(<a />)).toBeTruthy()

    component.unmount()
  })

  it('should correctly render a <h2 /> element', () => {
    const component = mount(<Link href="/">teste</Link>)

    expect(component.find('a').contains('teste')).toBeTruthy()

    component.unmount()
  })
})
