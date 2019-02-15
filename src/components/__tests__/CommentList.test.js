import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'root'

let wrapped

beforeEach(()=>{
    const initialState = {
        comments : ['Comment 1', 'Comment 2', 'hello', 'hi']
    }

    wrapped = mount(
        <Root initialState = {initialState}>
            <CommentList />
        </Root>
    )
    
})

it('create one li per comment', ()=>{
    console.log(wrapped.find('li').length)
})