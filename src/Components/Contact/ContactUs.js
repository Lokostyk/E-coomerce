import React,{useCallback, useState} from 'react'

export default function ContactUs() {
    const [alert,setAlert] = useState("")
    const [userData,setUserData] = useState({name:"",surmane:"",email:"",title:"",content:""})

    const submit = useCallback((e)=>{
        e.preventDefault()
        const reg = new RegExp(/^\S+@\S+\.\S+$/,"ig")
        if(reg.test(userData.email)){
            setUserData({name:"",surmane:"",email:"",title:"",content:""})
        }else{
            setAlert("Wrong email!")
            setTimeout(()=>{
                setAlert("")
            },5000)
        }
    },[userData])
    return (
        <section className="contactContainer">
            <img src="/pictures/table.jpg" className="contactBackground" />
            <form onSubmit={(e)=>submit(e)}>
                <p className="alert">{alert}</p>
                <h1>Contact Us</h1>
                <div>
                    <fieldset>
                        <legend>Name</legend>
                        <input value={userData.name} onChange={e=>setUserData({...userData,name:e.target.value})} required/>
                    </fieldset>
                    <fieldset>
                        <legend>Surname</legend>
                        <input value={userData.surmane} onChange={e=>setUserData({...userData,surmane:e.target.value})} required/>
                    </fieldset>
                </div>
                <fieldset>
                    <legend>Email</legend>
                        <input value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} required/>
                </fieldset>
                <fieldset>
                    <legend>Title</legend>
                        <input value={userData.title} onChange={e=>setUserData({...userData,title:e.target.value})} required/>
                </fieldset>
                <fieldset>
                    <legend>Content</legend>
                    <textarea value={userData.content} onChange={e=>setUserData({...userData,content:e.target.value})}/>
                </fieldset>
                <input type="submit" value="Send"/>
            </form>
        </section>
    )
}
