# Tutorial: Creating Tutorials for Cartesi Projects

Welcome to the Tutorial: Creating Tutorials for Cartesi Projects! In this tutorial, we will walk you through the process of creating comprehensive tutorials for projects developed on the Cartesi platform. By following this guide, you'll learn how to effectively document your Cartesi project, allowing users to understand its functionality, interact with its components, and replicate your work seamlessly.

## General Idea

This tutorial aims to demonstrate the methodology for documenting Cartesi projects effectively. It provides a structured approach to explaining project functionalities, system architecture, and deployment instructions. By following this template, developers can create informative and user-friendly documentation for their Cartesi projects.

## Components Interaction

The tutorial covers essential aspects such as project features, system architecture, and local deployment instructions. It also outlines the current functionality of the sample project, "The Prism," to serve as a reference for creating tutorials for other Cartesi projects.

## How to Build and Run the Solution

Follow these steps to build and run the solution locally:

### Prerequisites
- Node.js installed (preferably the latest stable version)
- Git installed on your machine
- Docker installed on your machine
- Python3 installed on your machine
- Sunodo installed on your machine

### Installation
 Clone the projects repository:

git clone [cartesi-front](https://github.com/leocoreixas/cartesi-labs)
git clone [cartesi-api](https://github.com/jsimonassi/cartesi-labs)


### Setting up the Frontend
1. Navigate to the directory:

    ```cd cartesi-labs```

2. Install the project dependencies:

    ```npm install```

3.  Run the frontend:

    ```npm start```

   
### Setting up the Backend
1. Initiate the container with sunodo framework:

    ```sunodo build``` and ```sunodo run --no-backend```

2. Navigate to the directory:

    ```cd cartesi-labs```

3. Run the backend:

This DApp's back-end is written in Python, so to run it in your machine you need to have python3 installed.

In order to start the back-end, run the following commands in a dedicated terminal:
    
    cd dapp.py
    python3 -m venv .venv
    . .venv/bin/activate
    pip install -r requirements.txt
    ROLLUP_HTTP_SERVER_URL="http://localhost:8080/host-runner" python3 dapp.py

### Testing the Solution
1. Open your browser and navigate to the following URL:

    ```http://localhost:3000/```

2. Interact with the project's functionalities and test its features.
3. Verify that the project is running correctly and that all components are functioning as expected.
4. If you encounter any issues, refer to the project's documentation or seek assistance from the development team.

## Conclusion

In this tutorial, we have covered the process of creating tutorials for Cartesi projects. By following the outlined steps, developers can effectively document their projects, enabling users to understand, interact with, and replicate their work. This structured approach to documentation ensures that project functionalities, system architecture, and deployment instructions are clearly explained, facilitating a seamless user experience. We hope this tutorial has been helpful in guiding you through the process of creating comprehensive tutorials for Cartesi projects. If you have any questions or require further assistance, please feel free to reach out to the Cartesi team or community for support. Thank you for your interest in Cartesi, and we look forward to seeing the tutorials you create for your projects!

## References

- [Cartesi Website](https://cartesi.io/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Python Documentation](https://docs.python.org/3/)
  
## Team Members

- [Leonardo Coreixas](https://github.com/leocoreixas)
- [Joao Simonassi](https://github.com/jsimonassi)
- [Gustavo Luppi](https://github.com/gustavoluppi)
- [Bernardo Cerqueira](https://github.com/bernardocerq)
- [Marcos Mendonça](https://github.com/marcoscezar1)
  


    





