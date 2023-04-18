import React from 'react';
import rocket from '../assets/rocket.jpg';

const RocketItem = () => (
  <>
    <article className="rocket">
      <img src={rocket} alt="rocketimage" />
      ;
      <div className="detail-container">
        <h2>Falcon 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus
          vel veniam molestiae eligendi mollitia deleniti inventore dolore nemo velit aliquam
          ea facere itaque, illo voluptate maxime, pariatur nobis eveniet.Proin condimentum urna
          nec massa scelerisque, illo voluptate maxime.
        </p>
        <button type="button" id="reserve-btn">
          Reserve Rocket
        </button>
      </div>
    </article>
  </>
);

export default RocketItem;
