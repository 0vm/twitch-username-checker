# Twitch Username Checker
dep.js and index.js are two distinct files with different functionalities.

dep.js focuses on request-based operations and relies on the powerful axios library. It excels in making HTTP requests and handling responses effectively. With dep.js, you can easily leverage its capabilities to perform a wide range of tasks. It can be rate limited easily.

On the other hand, index.js is built on the puppeteer framework. Unlike dep.js, it utilizes a headless browser to interact with web pages. This provides flexibility in scraping and automating web-related actions. Furthermore, index.js operates independently and is not subject to rate limitations.

The Twitch Username Checker is a Node.js application that allows you to check the availability of Twitch usernames. It utilises the Puppeteer library to automate the process of visiting Twitch profiles and checking for the "Sorry. Unless you’ve got a time machine, that content is unavailable." message.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```ruby
git clone https://github.com/0vm/twitch-username-checker.git
```

3. Navigate to the project directory:
```ruby
cd twitch-username-checker
```

4. Install the dependencies:
```ruby
npm install Puppeteer
```

5. Request Based Version Dependencies
```ruby
npm install axios
```

## Usage

1. Open the `index.js` file and modify the desired range of usernames to generate. By default, it generates all combinations of four-letter usernames from 'aaaa' to 'zzzz'. You can adjust this range according to your needs.

2. Run the application:
```ruby
node index.js
```
or
```ruby
node dep.js
```

3. The application will start checking the availability of Twitch usernames. It will create a file named `availableUsernames.txt` and append any available usernames to it.

## Error Handling

The application includes error handling mechanisms to prevent crashes when encountering errors during the checking process. Any errors that occur will be logged to the console, allowing the application to continue checking the remaining usernames.

## Customisation

You can customise the application by modifying the following parameters:

- `parallelBrowsingCount`: Specifies the number of parallel browser instances to run. Adjust this value based on your machine's capabilities and performance requirements.

- User Agent: The application sets a custom User Agent string to mimic Firefox. If needed, you can modify the User Agent in the `checkUsername` function.

## ⚠️ Warning ⚠️

**This application utilises significant CPU and RAM resources due to the nature of the operations it performs. Please consider the following before running the application:**

- Running this application may cause high CPU and RAM usage on your machine, especially when scanning multiple URLs concurrently.
- It is recommended to run this application on a device with sufficient resources or allocate dedicated resources to avoid impacting the performance of other applications running concurrently.
- We advise running this application on a remote desktop or an unused device to minimise disruptions and ensure optimal performance.
- Adjust the `parallelBrowsingCount` variable in the `checkUsernames` function to control the number of concurrent browser tabs opened by Puppeteer. Higher values may increase resource usage.

**Please proceed with caution and ensure that your system can handle the resource demands of this application before running it.**

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

[MIT License](LICENSE)

---
## Tags

Twitch, username, availability, checker, scanner, automation, Selenium, Python, web scraping, web automation, web browser, Twitch usernames, 4-letter usernames, Twitch account, Twitch botting, Twitch OG account, Twitch account creation, Twitch account registration, Twitch domain, domain availability, domain checker, domain scanner, Twitch domain scanner, Twitch username availability, Twitch username availability checker, Twitch username availability scanner, Twitch username bot, Twitch username tool, Twitch username availability tool, Twitch username automation, Twitch username finder, Twitch username search, Twitch username generator, Twitch username availability status, Twitch username validation, Twitch account management, Twitch account utilities, Twitch username list, Twitch username batch check, Twitch username bulk checker, Twitch username verification, Twitch username suggestions, Twitch account security, Twitch account setup, Twitch account management, Twitch account automation, Twitch username policy, Twitch username restrictions, Twitch username guidelines, Twitch username rules, Twitch username filtering, Twitch username format, Twitch username randomizer


*Note: Please be mindful of Twitch's terms of service when using this application. Respect Twitch's policies and guidelines regarding username availability and usage.*
