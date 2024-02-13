import React from 'react';

function DaysContent({ day }) {
  let content;

  switch (day) {
    case 'Day1':
      content = (
        <div>
          <h1>Content of Day 1</h1>
          {/* Add your content for Day 1 here */}
        </div>
      );
      break;
    case 'Day2':
      content = (
        <div>
          <h1>Content of Day 2</h1>
          {/* Add your content for Day 2 here */}
        </div>
      );
      break;
    case 'Day3':
      content = (
        <div>
          <h1>Content of Day 3</h1>
          {/* Add your content for Day 3 here */}
        </div>
      );
      break;
    case 'Day4':
      content = (
        <div>
          <h1>Content of Day 4</h1>
          {/* Add your content for Day 4 here */}
        </div>
      );
      break;
    case 'Day5':
      content = (
        <div>
          <h1>Content of Day 5</h1>
          {/* Add your content for Day 5 here */}
        </div>
      );
      break;
    default:
      content = <div>No content available for this day.</div>;
  }

  return content;
}

export default DaysContent;
