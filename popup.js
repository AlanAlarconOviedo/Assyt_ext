  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnPass').addEventListener('click', function() {
      insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A 
WI#: 190521101942868 
----------------------------------
Issue Description: Partner requested unlock and password reset  
-----------------------------------
Troubleshooting steps:

verified account in ADinfo

asked for the last 4 ssn

unlocked and provided the temporary password
-----------------------------------
Resolution Notes: Partner confirmed can access and agreed to close the ticket
-----------------------------------
Escalate to Resolver Group: N/A
 `);
    });
  
    document.getElementById('btnFalcon').addEventListener('click', function() {
      insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL:
SERIAL#:
WI#: 171228144532319

DESCRIPTION: The Partner requested Falcon installed in his computer
-----------------------------------
TROUBLESHOOTING STEPS:

Remoted into partner's desktop.
  
Copied the PowerTermPro folder from the GSD drive onto the partner's desktop.
  
Copied the folder to their C drive > MIS folder.
  
Opened the PowerTermPro folder and ran setup.exe as admin.
  
Right-clicked configure_powerterm.bat and ran as admin.
  
On the partner's desktop, right-clicked the PowerTerm icon and opened the file location.
  
Went to the ptw32.exe file and selected properties.
  
Changed compatibility for all users, selected Windows 7 mode from the dropdown, and applied.
  
Opened PowerTerm and configured the display session:
  
In the connection screen, selected 5250 Display.
Entered C00092A4 as the host and left the device name blank.
Went to Terminal > Setup and Preferences tab.
Selected Auto connect and Save window position > OK > Save setup as.
Pasted the setup onto the desktop and opened it with PowerTerm.
Opened another PowerTerm window > 5250 printer.
Entered C00092A4 as the host and the partner's C number as the device.
On setup: selected Auto connect and Save window position > OK > Save setup as.
For the printer: selected Graphic and selected Auto settings on the advanced tab.
Saved terminal setups.
-----------------------------------
RESOLUTION: Partner now has Falcon installed and configured Partner confirmed the issue is resolved, and agreed to close the ticket
-----------------------------------
Escalate to Resolver Group: N/A `);
    });
  
    document.getElementById('btnAS400pr').addEventListener('click', function() {
      insertTextInActiveTab(`
          
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL:
SERIAL#:
WI#:  04022021003                 

DESCRIPTION: Partner reported requested a pwd reset for the Falcon system

TROUBLESHOOTING STEPS:

opened ADinfo

confirmed the last 4 ssn

opened my Falcon

created a new temporary password

provided the temporary password

RESOLUTION NOTES: Partner confirmed is able to log in to Falcon
-----------------------------------
Escalate to Resolver Group: N/A `);
    });
  
    document.getElementById('btnAS400unlock').addEventListener('click', function() {
      insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#:  04022021003                 

DESCRIPTION: Partner reported was locked out on Falcon

TROUBLESHOOTING STEPS:

opened ADinfo

confirmed the last 4 ssn

opened my Falcon

unlocked the Falcon account

asked the Partner to access again

RESOLUTION NOTES: Partner confirmed is able to log in to Falcon adna greed to close the ticket
-----------------------------------
Escalate to Resolver Group: N/A `);
    });
  
 


    document.getElementById('btnCIPCmanual').addEventListener('click', function() {
      insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
  
WI#: 201201103848563
  
DESCRIPTION: The Partner called requesting the Cisco IP Communicator setup
  
TROUBLESHOOTING STEPS:
  
Remoted in.
Opened CIPC as administrator.
Ran the audio tuning wizard.
Went to the first button at the top of CIPC > Preferences.
Went to the Network tab.
Selected "Use this device" and configured it with the phone number as the device SEPxxxxxxxxxx.
Verified the server settings:
TFTP Server 1: 10.9.225.2
TFTP Server 2: 10.9.225.75
-----------------------------------
RESOLUTION: After the troubleshoot the partner can now use the Cisco IP Communicator software. Partner confirmed the issue is resolved, and the ticket can be closed.
-----------------------------------
Escalate to Resolver Group: N/A`);
    });

// Add click event for Partner Connect button
document.getElementById('btnPartner').addEventListener('click', function() {
  insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#: 04022021055

DESCRIPTION: The Partner called reporting an internal issue with the Partner Connect system
-----------------------------------
TROUBLESHOOTING STEPS:

Partner was referred to the Partner Connect team.

Provided Partner Connect contact information: 	

Transfered the call to the Partner Connect Support team at 1-866-256-6559
-----------------------------------
RESOLUTION: Partner was referred to Partner Connect; Advised partner that ticket will be closed.
-----------------------------------
Escalate to Resolver Group: N/A `);
});

// Add click event for Verizon button
document.getElementById('btnVerizon').addEventListener('click', function() {
  insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#: 100528124704191

DESCRIPTION: The Partner called reporting an issue that only the Verizon team handle
-----------------------------------
TROUBLESHOOTING STEPS:

Partner was referred to the Verizon team.

Provided Verizon contact information: 800-914-1960, Option 2, Option 2.
-----------------------------------
RESOLUTION:The Partner was referred to Verizon; Advised partner that ticket will be closed.
-----------------------------------
Escalate to Resolver Group: N/A  `);
});

// Add click event for Bitlocker Key button
document.getElementById('btnBitlocker Key').addEventListener('click', function() {
  insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#: 190104113623228                 
----------------------------------
Issue Description: Partner requested the Bit locker recovery key  
-----------------------------------
Troubleshooting steps:

opened Bit locker admin
asked for the first 8 characters
provided the recovery key
guided the Partner to open the file explorer > This PC
selected with right-click Bitlocker encryption option > manage your PIN
created the Bit locker PIN
-----------------------------------
Resolution Notes: Partner confirmed can use the drive recovery key and create a PIN
-----------------------------------
Escalate to Resolver Group: N/A
`);
});

document.getElementById('btnMap Shared drive').addEventListener('click', function() {
  insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#: 100526230904109  
----------------------------------
DESCRIPTION: Partner requested the xx drive mapped
-----------------------------------
TROUBLESHOOTING STEPS:

remoted in

opened the file explorer > this PC

selected computer > Map a drive

mapped the xx drive
-----------------------------------
RESOLUTION NOTES: The xx drive was mapped successfully and the Partner agreed to close the ticket
-----------------------------------
Escalate to Resolver Group: N/A
`);
});

document.getElementById('btnLocal Printer').addEventListener('click', function() {
  insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#:  100527204610563 
----------------------------------
DESCRIPTION: Partner requested assistance installing a local printer
-----------------------------------
TROUBLESHOOTING STEPS:

remoted in

asked the Partner to connect the printer vie USB

downloaded the driver

ran the driver

installed the local printer

printed a test page

confirmed the printer is correctly added
-----------------------------------
RESOLUTION NOTES: The local printer was successfully installed and the Partner agreed to close the ticket
-----------------------------------
Escalate to Resolver Group: N/A
`);
});

document.getElementById('btnNetwork Printer').addEventListener('click', function() {
  insertTextInActiveTab(`
USER ID and NAME:
CALLBACK#:
LOC#/DIV:
ONSITE/OFFSITE: ONSITE
APP/SOFTWARE:
MAKE & MODEL: N/A
SERIAL#: N/A
WI#: 100527204610563 
----------------------------------
DESCRIPTION: Partner requested assistance installing a network printer
-----------------------------------
TROUBLESHOOTING STEPS:

remoted in

opened Printer Logic

installed the network printer

printed a test page

confirmed the printer is working
-----------------------------------
RESOLUTION NOTES: The printer was successfully installed and the Partner agreed to close the ticket
-----------------------------------
Escalate to Resolver Group: N/A
`);
});

//Funcion para extraer LAPS
  document.getElementById('btnExtractSendLAPS').addEventListener('click', function() {
    extractAndCombineInfo();
  });

//Funcion para enviar LAPS  a TEAMS
  document.getElementById('btnSendTeams').addEventListener('click', function() {
    sendTeamsMessage();
  });
  });
  
  function sendTeamsMessage() {
    const webhookUrl = 'https://convergetp.webhook.office.com/webhookb2/21c308cd-2de4-44e3-a360-1a94e6686ee2@e7e3e063-7a10-4f0f-9cbc-2e661383895e/IncomingWebhook/e16aebe956714af4bf6ca72e1acf269d/22b95eed-5a99-487d-8292-9d01a72b43f0'; // URL del webhook de Teams
    const reason = document.getElementById('reason').value;
    const serialNumber = document.getElementById('serialNumber').value;
    const output = document.getElementById('output').value;
  
    const message = {
      text: `Alan Request:\n\n${output}\n\n`
    };
  
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
      body: JSON.stringify(message)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent to Teams successfully!');
      } else {
        alert('Message sent to Teams.');
      }
    })
    .catch(error => {
      console.error('Error sending message to Teams:', error);
      alert('Error sending message to Teams: ' + error.message);
    });
  }
  
  function insertTextInActiveTab(buttonText) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: insertTextAndModifyCSS,
        args: [buttonText]
      });
    });
  }
  
  function insertTextAndModifyCSS(buttonText) {
    var textToInsert = buttonText;
    var editArea = document.querySelector("#editArea");
    if (editArea) {
      editArea.innerText = textToInsert;
      console.log("Texto insertado correctamente en el div");
  
      var elements = document.querySelectorAll(".tundra .restClient .axios-edit-area-autocomplete-container .axios-edit-area-autocomplete");
      elements.forEach(function(element) {
        element.style.height = "400px";
      });
      console.log("CSS modificado correctamente");
    } else {
      console.error("No se encontró el div con el selector proporcionado.");
    }
  }
  
  function extractTicketInfo() {
    const userName = document.querySelector(".dijitReset.dijitInputInner.formInput")?.value || "";
    const ticketNumber = document.querySelector("#contentPaneTitle")?.innerText || "";
  
    return { ticketNumber, userName };
  }
  
  function extractAndCombineInfo() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: extractTicketInfo
      }, function(results) {
        if (results && results[0]) {
          const { ticketNumber, userName } = results[0].result;
  
          const reason = document.getElementById('reason').value;
          const serialNumber = document.getElementById('serialNumber').value;
  
          const combinedInfo = `
    Ticket Number: ${ticketNumber}
    User: ${userName}
    Reason: ${reason}
    Serial Number: ${serialNumber}
  
    `;
  
          document.getElementById('output').value = combinedInfo;
        }
      });
    });
  }