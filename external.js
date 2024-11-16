function calculateExternalMarks() {
    // Get End-Semester Marks
    const endSemMarks = parseFloat(document.getElementById('endSemMarks').value) || 0;
  
    // Calculate External Marks
    const externalMarks = endSemMarks * 0.6;
  
    // Cap to max marks (60)
    const cappedMarks = Math.min(externalMarks, 60);
  
    // Display result
    document.getElementById('externalResult').textContent = cappedMarks.toFixed(2);
  }
  