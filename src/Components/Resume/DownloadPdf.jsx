// import React from 'react';

// const DownloadButton = () => {
//   const handleDownload = () => {
//     // Replace with your actual PDF file URL or local path
//     const pdfUrl = 'https://drive.google.com/file/d/1wappVpUveXPTgmOTXP3CySTEFzsHETQT/view?usp=sharing';
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'RAHUL_MUDGAL_8595232442.pdf'; // Specify the default file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={handleDownload} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//       Download PDF
//     </button>
//   );
// };

// export default DownloadButton;



import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1wappVpUveXPTgmOTXP3CySTEFzsHETQT';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RAHUL_MUDGAL_8595232442.pdf'; // Specify the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex flex-row justify-center pt-80'>
        <button
      onClick={handleDownload}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Download PDF
    </button>
    </div>
  );
};

export default DownloadButton;
