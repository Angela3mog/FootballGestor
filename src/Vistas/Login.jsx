import React from 'react'
import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";

const login = () => 



<div class="hero is-primary is-fullheight">
<div class="hero-body">
    
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-4">
                <form action="" class="box">
                    <div class="field">
                        <label class="label">
                            Email
                        </label>
                        <div class="control has-icons-left">
                            <input type="email" class="input" placeholder="john@example.com"/>
                            <span class="icon is-small is-left">
                                <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left">
                            <input type="password" class="input" placeholder="john@example.com"/>
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">
                            <input type="checkbox" class="checkbox"/>
                            Remember me
                        </label>
                    </div>
                    <div class="field">
                        <button class="button is-success">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    
export default login