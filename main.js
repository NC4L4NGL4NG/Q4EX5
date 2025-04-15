    function checkTrafficLight() {
      const color = document.getElementById("colorInput").value.trim().toLowerCase();
      const output = document.getElementById("outputMessage");

      if (color === "red") {
        output.textContent = "🛑 STOP!";
        output.style.color = "red";
      } else if (color === "yellow") {
        output.textContent = "⚠️ CAUTION!";
        output.style.color = "goldenrod";
      } else if (color === "green") {
        output.textContent = "✅ GO!";
        output.style.color = "green";
      } else {
        output.textContent = "❌ ERROR – Unknown color.";
        output.style.color = "gray";
      }
    }