window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const svgNS = "http://www.w3.org/2000/svg";

  const createRandomShape = () => {
      const shape = document.createElementNS(svgNS, 'rect');
      shape.setAttribute('x', getRandomCoordinate());
      shape.setAttribute('y', getRandomCoordinate());
      shape.setAttribute('width', getRandomSize());
      shape.setAttribute('height', getRandomSize());
      shape.setAttribute('fill', getRandomColor());
      return shape;
  };

  const getRandomCoordinate = () => {
      return Math.floor(Math.random() * 300);
  };

  const getRandomSize = () => {
      return Math.floor(Math.random() * 100) + 50;
  };

  const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  };

  const addRandomShape = () => {
      const shape = createRandomShape();
      canvas.appendChild(shape);
  };

  setInterval(addRandomShape, 1000);
});
