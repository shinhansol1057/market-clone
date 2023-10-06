
<body>
  <div id="spinner"></div>
</body>



<style>

  body {
    width: 100%;
    height: 100%;
  }

  body {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  #spinner {
    min-width: 40px;
    min-height: 40px;
    border: 5px solid rgba(0,0,0,0.7);
    border-right: 5px solid orange;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
</style>