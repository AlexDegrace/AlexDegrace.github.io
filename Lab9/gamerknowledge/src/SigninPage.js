import React, { Component, setState,useContext } from 'react'
import { Button,InputGroup,FormControl, Alert } from 'react-bootstrap';
import { Redirect, Route, Switch } from "react-router";
import accountContext from "./App"
import account from './App'

export default class SigninPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            showSignIn: true,
            newUsername:'',
            newPassword:'',
            newPassword2:'',
            newEmail:'',
            accounts: [{username: "alex", password: "password", email:"alexdegrace@gmail.com"}],
            authenticated: false,
            showFailedAttempt: false,
            user: '',
            accountCreated: false,
            accountCreationFailed: false,
            isEnglish:false,
        }

    }

    toggleSignin = (createAccount) => (event) =>{
        if(createAccount){
            this.setState({showSignIn: false});
        }
        else{
            this.setState({showSignIn: true});
        }
        this.setState({authenticated: false, showFailedAttempt: false, accountCreated: false,accountCreationFailed: false})
    }

    render() {
        return (
            <div style={{ minHeight:"1080px"}}>
            <div style={{display: this.state.showSignIn ? 'block' : 'none', marginTop:"5%", backgroundColor:"#121212", width:"40%", marginLeft:"auto",marginRight:"auto", paddingTop:"2%",paddingBottom:"2%", boxShadow:"5px 5px 16px 3px #333333"}}>
                <h2 style={{color:"white", display: this.props.language ? 'block' : 'none'}}>Sign In</h2>
                <h2 style={{color:"white", display: !this.props.language ? 'block' : 'none'}}>Connection</h2>
                <div>
                    <Alert style={{display: (this.state.authenticated && this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="success">
                        You are now sign in as {this.state.user} !
                    </Alert>
                    <Alert style={{display: (this.state.authenticated && !this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="success">
                        Vous etes connecter en tant que {this.state.user} !
                    </Alert>
                    <Alert style={{display: (this.state.showFailedAttempt&& this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="danger">
                        Username and password not matching!
                    </Alert>
                    <Alert style={{display: (this.state.showFailedAttempt&& !this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="danger">
                        Le mot de passe entré est incorrect!
                    </Alert>
                </div>
                <div style={{marginTop : "5%",display: this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl placeholder="Enter your Username" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({username: event.target.value})} />
                    </InputGroup>
                    
                </div>
                <div style={{marginTop : "5%", display: !this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl placeholder="Entrez votre nom d'utilisateur" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({username: event.target.value})} />
                    </InputGroup>
                </div>
            <br/>
            <div style={{marginTop : "2%", display: this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl type="password" placeholder="Enter your Password" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({password:event.target.value})} />
                    </InputGroup>
                    
                </div>
                <div style={{marginTop : "2%", display: !this.props.language ? 'block' : 'none'}}>
                <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl type="password" placeholder="Tapez votre mot de passe" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({username: event.target.value})} />
                    </InputGroup>
                </div>
            <br/>
                <div>
                    <Button style={{display: this.props.language ? 'block' : 'none' , marginLeft:"auto", marginRight:"auto"}} variant="outline-success" onClick={() => {
                        var i;
                        var found = false;
                        for(i=0; i<this.state.accounts.length; i++){
                            if(this.state.accounts[i].username === this.state.username && this.state.accounts[i].password === this.state.password){
                                found = true;
                                console.log("User found!");
                            }
                        }
                        this.setState({authenticated:found});
                        this.setState({showFailedAttempt:!found});
                        if(found){
                            this.setState({user:this.state.username});
                        }
                    }}>
                        Log In
                    </Button>
                    <Button style={{display: !this.props.language ? 'block' : 'none', marginLeft:"auto", marginRight:"auto"}} variant="outline-success" onClick={() => {
                        var i;
                        var found = false;
                        for(i=0; i<this.state.accounts.length; i++){
                            if(this.state.accounts[i].username === this.state.username && this.state.accounts[i].password === this.state.password){
                                found = true;
                                console.log("User found!");
                            }
                        }
                        this.setState({authenticated:found});
                        this.setState({showFailedAttempt:!found});
                        if(found){
                            this.setState({user:this.state.username});
                        }
                    }}>
                        Connexion
                    </Button>
                </div>
            <br/>
                <div style={{marginTop : "2%"}}>
                    <a onClick={this.toggleSignin(true)} style={{display: this.props.language ? 'block' : 'none'}} className="createAccount" value="createAccount">Not a member yet?</a>
                    <a onClick={this.toggleSignin(true)} style={{display: !this.props.language ? 'block' : 'none'}} className="createAccount" value="createAccount">Pas encore membre?</a>
                </div>
            </div>

            <div style={{display: this.state.showSignIn ? 'none' : 'block', marginTop:"5%", backgroundColor:"#121212", width:"40%", marginLeft:"auto",marginRight:"auto", paddingTop:"2%",paddingBottom:"2%", boxShadow:"5px 5px 16px 3px #333333"}}>
                <h2 style={{color:"white", display: this.props.language ? 'block' : 'none'}}>Sign Up</h2>
                <h2 style={{color:"white", display: !this.props.language ? 'block' : 'none'}}>Inscription</h2>
                    <Alert style={{display: (this.state.accountCreated && this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="success">
                        Your account was successfuly created!
                    </Alert>
                    <Alert style={{display: (this.state.accountCreated && !this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="success">
                        Votre compte a été créé avec succès !
                    </Alert>
                    <Alert style={{display: (this.state.accountCreationFailed&& this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="danger">
                        Account could not be created! Please try again
                    </Alert>
                    <Alert style={{display: (this.state.accountCreationFailed&& !this.props.language) ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto"}} variant="danger">
                    Le compte n'a pas pu être créé ! Veuillez réessayer
                    </Alert>
                <div style={{marginTop : "5%", display: this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl placeholder="Email" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newEmail:event.target.value})} />
                    </InputGroup>
                </div>
                <div style={{marginTop : "5%", display: !this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl placeholder="E-mail" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newEmail:event.target.value})} />
                    </InputGroup>
                </div>
            <br/>
                <div style={{marginTop : "2%", display: this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl placeholder="Username" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newUsername:event.target.value})} />
                    </InputGroup>
                    
                </div>
                <div style={{marginTop : "2%", display: !this.props.language ? 'block' : 'none'}}>
                <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl placeholder="Nom d'utilisateur" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newUsername:event.target.value})} />
                    </InputGroup>
                </div>
            <br/>
                <div style={{marginTop : "2%", display: this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl type="password" placeholder="Password" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newPassword:event.target.value})} />
                    </InputGroup>
                    <Alert style={{display: this.state.newPassword.length != 0 && this.state.newPassword.length <10 ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto", marginTop:"1%"}} variant="danger">
                        Password must be at least 10 characters long!
                    </Alert>
                </div>
                <div style={{marginTop : "2%", display: !this.props.language ? 'block' : 'none'}}>
                    <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                        <FormControl type="password" placeholder="Mot de passe" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newPassword:event.target.value})} />
                    </InputGroup>
                    <Alert style={{display: this.state.newPassword.length != 0 && this.state.newPassword.length <10 ? 'block' : 'none', width:"50%", marginLeft:"auto",marginRight:"auto", marginTop:"1%"}} variant="danger">
                        Le mot de passe doit comporter au moins 10 caractères !
                    </Alert>
                </div>
            <br/>
            <div style={{marginTop : "2%", display: this.props.language ? 'block' : 'none'}}>
                <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                    <FormControl type="password" placeholder="Re-enter Password" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newPassword2:event.target.value})} />
                </InputGroup>
                
            </div>
            <div style={{marginTop : "2%", display: !this.props.language ? 'block' : 'none'}}>
            <InputGroup style={{ width: "40%", alignItems: "center", margin:"auto"}} size="lg">
                    <FormControl type="password" placeholder="Retaper le mot de passe" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange = {(event) => this.setState({newPassword2:event.target.value})} />
                </InputGroup>
            </div>
            <br/>
                <Button style={{display: this.props.language ? 'block' : 'none', marginLeft:"auto", marginRight:"auto"}} variant="outline-success" onClick={() => {
                        var myAccounts = this.state.accounts;
                        var accountCreated =false;
                        console.log(this.state.newUsername);
                        if(this.state.newUsername != "" && this.state.newEmail != "" && this.state.newPassword != "" && this.state.newPassword2 !="" && (this.state.newPassword === this.state.newPassword2)){
                            myAccounts.push({username:this.state.newUsername, password:this.state.newPassword, email:this.state.newEmail});
                            accountCreated = true;
                        }
                        this.setState({accounts:myAccounts, accountCreated:accountCreated, accountCreationFailed:!accountCreated});
                        console.log(this.state.accounts);
                    }}>
                        Create Account
                </Button>
                <Button style={{display: !this.props.language ? 'block' : 'none', marginLeft:"auto", marginRight:"auto"}} variant="outline-success" onClick={() => {
                        var myAccounts = this.state.accounts;
                        var accountCreated =false;
                        console.log(this.state.newUsername);
                        if(this.state.newUsername != "" && this.state.newEmail != "" && this.state.newPassword != "" && this.state.newPassword2 !="" && (this.state.newPassword === this.state.newPassword2)){
                            myAccounts.push({username:this.state.newUsername, password:this.state.newPassword, email:this.state.newEmail});
                            accountCreated = true;
                        }
                        this.setState({accounts:myAccounts, accountCreated:accountCreated, accountCreationFailed:!accountCreated});
                        console.log(this.state.accounts);
                    }}>
                        Créer un compte
                </Button>
                <div style={{marginTop : "5%"}}>
                    <a style={{display: this.props.language ? 'block' : 'none'}} onClick={this.toggleSignin(false)} className="createAccount">Already have an account?</a>
                    <a style={{display: !this.props.language ? 'block' : 'none'}} onClick={this.toggleSignin(false)} className="createAccount">Vous avez déjà un compte?</a>
                </div>
            </div>
            </div>
        )
    }
}
