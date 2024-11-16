function calculateInternalMarks() {
    // Get inputs for FAT1
    const fat1_written = parseFloat(document.getElementById('fat1_written').value) || 0;
    const fat1_assignment = parseFloat(document.getElementById('fat1_assignment').value) || 0;
  
    // Get inputs for FAT2
    const fat2_written = parseFloat(document.getElementById('fat2_written').value) || 0;
    const fat2_assignment = parseFloat(document.getElementById('fat2_assignment').value) || 0;
  
    // Get inputs for FAT3
    const fat3_written = parseFloat(document.getElementById('fat3_written').value) || 0;
    const fat3_assignment = parseFloat(document.getElementById('fat3_assignment').value) || 0;
  
    // Step 1: Calculate FAT scores
    const fat1 = ((fat1_written * 0.7) + (fat1_assignment * 0.3)) / 3;
    const fat2 = ((fat2_written * 0.7) + (fat2_assignment * 0.3)) / 3;
    const fat3 = ((fat3_written * 0.7) + (fat3_assignment * 0.3)) / 3;
  
    // Step 2: Calculate internal marks
    const internalMarks = (fat1 + fat2 + fat3) * 0.8;
  
    // Step 3: Cap to max marks (40)
    const cappedMarks = Math.min(internalMarks, 40);
  
    // Display result
    document.getElementById('result').textContent = cappedMarks.toFixed(2);
  }
  