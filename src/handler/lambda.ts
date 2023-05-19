const handler = async (event, context) => {
  try {
    // Your code logic goes here

    return {
      statusCode: 200,
      body: 'Lambda function executed successfully!',
    };
  } catch (error) {
    // Handle any errors that occur during execution
    console.error('Error:', error);
    throw error;
  }
};

module.exports = handler;