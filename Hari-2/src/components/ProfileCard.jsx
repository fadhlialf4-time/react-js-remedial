// Nomor 1
function ProfileCard({ name, photo, bio, skills }) {
  return (
    <div style={{
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '16px',
      textAlign: 'center'
    }}>
      <img
        src={photo}
        alt={name}
        style={{ width: '100px', borderRadius: '50%' }}
      />

      <h2>{name}</h2>
      <p>{bio}</p>

      <h4>Skills</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}


export default ProfileCard