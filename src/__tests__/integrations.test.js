import React from 'react'
import { mount } from 'enzyme'
import Root from 'root' 
import moxios from 'moxios'
import App from 'components/App'

beforeEach(()=>{
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status : 200,
        response : [
            {name: 'Fetch #1'}, {name: 'Fetch #2'}
        ]
    })
})

afterEach(()=>{
    moxios.uninstall()
})

it('can fetch a list of comments and display them', (done)=>{
    //Attempt to render the *entire app\
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    //find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click')

    moxios.wait(()=>{
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2),
        done()
        wrapped.unmount()
    })

    

    //Expect to find a list of comments
})