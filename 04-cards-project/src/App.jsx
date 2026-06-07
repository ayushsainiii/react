import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.pNt3eE2adoxOx-UWzhBJogHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/424/614/original/apple-logo-black-isolated-on-white-background-free-vector.jpg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/571/original/netflix-logo-on-transparent-background-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/100/812/non_2x/microsoft-logo-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.uH4dGMRTIYF2UxGFv67TAgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Frontend Software Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.UZL0OUP3-IZDt_Q_tg0YvAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$47/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Cpg7PGzSCUdm_SrTff2X4wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Salesforce",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$53/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/024/039/090/original/nvidia-logo-transparent-free-png.png",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Bangalore, India"
  }
];

// arr.map(function(elem){
//   console.log(elem.name);
// })
console.log(jobOpenings);


  return (
    <div className="parent">



    {jobOpenings.map(function(elem){
      return <Card company={elem.companyName} 
      datePost={elem.datePosted} 
      post={elem.post} 
      tag1={elem.tag1} 
      tag2={elem.tag2} 
      pay={elem.pay} 
      location={elem.location} 
      brandLogo={elem.brandLogo} />
      
    })}
    





      {/* {arr.map(function(elem){
        return <h1>{elem}</h1>
      })} */}
      
    </div>
  )
}

export default App
