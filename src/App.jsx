import Student from "./student"

function App() {

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <PostComponent />
        <PostComponent />
        <PostComponent />
      </div>
      <ProfileCardComponent />
      <Student name="Nikhil" age={30} isStudent={true}/> {/* For learning Props*/}
      <Student name="Patrick" age={40} isStudent={false}/>
      <Student />
    </div>
    
  )

}
// structuring your app into components
// Defining a state of your application

const style = { width: 500, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 20 }

function PostComponent() {
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
        width: 60,
        height: 60,
        borderRadius: 40,
        marginTop: 15
      }} />
      {/* upper body */}
      <div style={{ fontSize: 18, marginLeft: 20 }}>
        <b>
          100xdevs
        </b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
      {/* upper body */}

    </div>
    <div style={{ fontSize: 17, marginTop: 20 }}>
      Want to know how win big? Check out how these folks won $6000 in bounties
    </div>
  </div>
}

const styleProfileCard = {width: "300px", height: "400px", background: "#fff", borderRadius: "8px", marginLeft: "30px", marginTop: "-100px", fontFamily: "Arial, sans-serif"}

function ProfileCardComponent(){
  return <div style={styleProfileCard}>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
    <div id="HeadBackground" style={{width: "100%", background: "grey",height: "90px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}></div>
    <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="profile-pic" style={{width: "75px", borderRadius: "50%", position: "relative", top: "-39px", border: "2px solid white"}} />
    <h3 style={{marginTop: "-20px"}}>Harkirat Singh</h3>
    <p style={{color: "grey", marginTop: "-5px"}}>Working with WebRTC</p>
    <hr style={{width: "95%"}}/>
    <div style={{display: "flex", justifyContent: "space-around", width: "100%", alignItems: "center"}}>
      <p style={{marginLeft: "-40px", color: "grey", fontWeight: "600"}}>Profile viewers</p>
      <b style={{marginRight: "-40px", color: "blue"}}>41,903</b>
    </div>
    <div style={{display: "flex", justifyContent: "space-around", width: "100%", alignItems: "center"}}>
      <p style={{marginLeft: "-40px", color: "grey", fontWeight: "600"}}>Post impressions</p>
      <b style={{marginRight: "-40px", color: "blue"}}>1,313</b>
    </div>
  </div>
  </div>
}
export default App
