import { Link } from 'react-router-dom';
import SEO from '../components/Seo/Seo';   // ADD THIS LINE

function NotFoundPage() {
  return (
    <>
    <SEO
      title="Page Not Found | LiveFree Hostels"
      description="This page doesn't exist. Find hostels in Rishikesh, Varanasi and Dehradun on the LiveFree Hostels homepage."
      path="/404"
    />
  
    <div
      style={{
        width: '100%',           // ✅ Changed from 100vw to 100%
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        boxSizing: 'border-box', // ✅ Ensures padding doesn't add extra width
      }}
    >
      <h1 style={{ fontSize: '80px', margin: 0 }}>404</h1>
      <h2 className='section-title'>Page Not Found</h2>
      <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.05rem',
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: 1.7,
          marginBottom:"10px"
        }}>Sorry, this page doesn't exist.</p>
      <Link to="/" className='btn btn-primary'>Go back home</Link>
    </div>
    </>
  );
}

export default NotFoundPage;


  