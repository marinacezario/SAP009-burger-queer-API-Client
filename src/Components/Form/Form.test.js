import React from "react";
import { fireEvent, render, screen, waitFor, userEvent } from '@testing-library/react';
import {Form} from './Form';

import {handleSubmitForm} from '../../API/users'
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


jest.mock('../../API/users');

jest.mock('react-router-dom');



describe('Form', () => {
    it('redirects to another page when login is successful',  () => {

        // const navigate = jest.fn();
        // useNavigate.mockReturnValue(navigate);
        // handleSubmitForm.mockResolvedValueOnce({
        //     accessToken: "123pride456month7892023",
        //     user: {
        //         email: "waiter@email.com",
        //         id: 4,
        //         role: "waiter"
        //     }
        // })

render(  
<BrowserRouter>
  <Form />
</BrowserRouter>
 )
      
//  const email = screen.getByPlaceholderText('Email')
//         const password = screen.getByPlaceholderText('Senha')
//         const button = screen.getByRole('button');

//         fireEvent.change(email, { target: { value: 'waiter@email.com' } });
//         fireEvent.change(password, { target: { value: 'password' } });

//         fireEvent.click(button);
       
//             expect(navigate).toHaveBeenCalledWith('/new-order');
     
//        
    });
       
    });
