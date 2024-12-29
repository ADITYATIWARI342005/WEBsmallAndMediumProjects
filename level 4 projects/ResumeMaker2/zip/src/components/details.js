

const Details = () => {
  const [resumeData, setResumeData] = useState({
    objective: "",
    experience: "",
    education: "",
    skills: ""
  });



  


 
if (!resumeData.objective || !resumeData.experience || !resumeData.education || !resumeData.skills) {
  toast.error("All fields are required!");
  return;
}

if (resumeData.objective.split(" ").length < 100) {
  toast.error("Objective should be at least 100 words");
  return;
}

   
      toast.error("You cannot modify name, email, date of birth, or gender.");
    

        toast.success("Resume updated successfully");
     
        toast.error("Error updating resume");
     
      toast.error("You need to be authenticated to update resume");
 
  
  return (
    <>
    <div className="profile-pic-container-upload">
  <label>
    <img src={profilePicURL || "https://w1.pngwing.com/pngs/132/484/png-transparent-circle-silhouette-avatar-user-upload-pixel-art-user-profile-document-black.png"} alt="Upload Profile" className="round-pic"/>
    <input type="file" onChange={handleFileChange} style={{ display: 'none' }}/>
  </label>
</div>

    <div className="form-container">
      
      <form onSubmit={handleSubmit} className='resume-input-form'>
        <div className="row">
          <label>
            Objective:
            <textarea name="objective" ></textarea>
          </label>
          <label>
            Experience:
            <textarea name="experience" ></textarea>
          </label>
        </div>
        <div className="row">
          <label>
            Education:
            <textarea name="education" ></textarea>
          </label>
          <label>
            Skills:
            <textarea type="text" ></textarea>
          </label>
        </div>
        <div className="submit-row">
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
    </>
  )
  
}

export default Details;
