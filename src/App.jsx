
function App() {

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <PostComponent />
          <PostComponent />
          <PostComponent />
      </div>
    </div>
  )

}
// structuring your app into components
// Defining a state of your application

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 20 }

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
export default App
