function calculateOverallMarks() {
    // Internals Calculation
    const fat1_written = parseFloat(document.getElementById('fat1_written').value) || 0;
    const fat1_assignment = parseFloat(document.getElementById('fat1_assignment').value) || 0;
    const fat2_written = parseFloat(document.getElementById('fat2_written').value) || 0;
    const fat2_assignment = parseFloat(document.getElementById('fat2_assignment').value) || 0;
    const fat3_written = parseFloat(document.getElementById('fat3_written').value) || 0;
    const fat3_assignment = parseFloat(document.getElementById('fat3_assignment').value) || 0;
  
    const fat1 = (fat1_written * 0.7) + (fat1_assignment * 0.3);
    const fat2 = (fat2_written * 0.7) + (fat2_assignment * 0.3);
    const fat3 = (fat3_written * 0.7) + (fat3_assignment * 0.3);
  
    const internalMarks = ((fat1 + fat2 + fat3) / 3) * 0.8;
    const cappedInternalMarks = Math.min(internalMarks, 40);
  
    // Externals Calculation
    const endSemMarks = parseFloat(document.getElementById('endSemMarks').value) || 0;
    const externalMarks = endSemMarks * 0.6;
    const cappedExternalMarks = Math.min(externalMarks, 60);
  
    // Final Score
    const finalScore = cappedInternalMarks + cappedExternalMarks;
  
    // Display Results
    document.getElementById('internalResult').textContent = cappedInternalMarks.toFixed(2);
    document.getElementById('externalResult').textContent = cappedExternalMarks.toFixed(2);
    document.getElementById('finalScore').textContent = finalScore.toFixed(2);
  }
  