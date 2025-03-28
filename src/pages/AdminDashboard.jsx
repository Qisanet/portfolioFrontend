import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    coverimage: '', // Image will be stored as base64 string
    projectUrl: '',
    githubUrl: '',
  });

  const [messages, setMessages] = useState([]); // State to store inbox messages
  const navigate = useNavigate(); // Declare navigate

  // Fetch messages when the component loads
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token'); // Get admin token
        const response = await axios.get('https://portfoliobackend-2-7wi5.onrender.com/contact', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data); // Store messages in state
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages(); // Call function to fetch messages
  }, []);

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectData((prevState) => ({
          ...prevState,
          coverimage: reader.result, // Set the base64 string as coverimage
        }));
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://portfoliobackend-2-7wi5.onrender.com/projects', projectData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Project added successfully!');
      setProjectData({ title: '', description: '', coverimage: '', projectUrl: '', githubUrl: '', });
      navigate('/projects');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project. Please try again.');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      {/*for adding projects */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={projectData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={projectData.description}
          onChange={handleChange}
          required
        />
        
        {/* Input for cover image */}
        <input
          type="file"
          name="coverimage"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        
        {/* Displaying image preview */}
        {projectData.coverimage && (
          <div>
            <img
              src={projectData.coverimage}
              alt="Cover Preview"
              style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }}
            />
          </div>
        )}

        <input
          type="text"
          name="projectUrl"
          placeholder="Project URL"
          value={projectData.projectUrl}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="githubUrl"
          placeholder="Github URL"
          value={projectData.githubUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Project</button>
      </form>

    
     
      <div className="inbox-messages" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Inbox Messages</h2>
  {messages.length === 0 ? (
    <p>No new messages</p>
  ) : (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
      gap: '16px' 
    }}>
      {messages.map((msg, index) => (
        <div key={index} style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px',  
          padding: '12px', 
          boxShadow: '2px 2px 6px rgba(219, 77, 77, 0.92)',
          wordWrap: 'break-word',   // ✅ Ensures words break properly
          overflowWrap: 'break-word', // ✅ Alternative to ensure wrapping
          whiteSpace: 'normal',   // ✅ Allows text to wrap to the next line
          maxWidth: '100%' 
        }}>
          <p><strong>From:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Subject:</strong> {msg.subject}</p>
          <p><strong>Message:</strong> {msg.message}</p>
          <p><strong>Time:</strong> {new Date(msg.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
};

export default AdminDashboard;
