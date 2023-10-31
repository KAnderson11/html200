    function Atm() {
        let balance = 0;
        while (true) {
          let input = prompt('Please enter Q to quit. Please enter W to withdraw. Please enter D to deposit. Please enter B to view balance.');
          if (input === "Q") {
            break;
          } else if (input === "W") {
            let amount = Number(prompt('Please enter the amount you want to withdraw'));
              if (balance < amount) {
                alert('You have insufficient funds!');
            } else {
              balance -= amount;
                alert('You have withdrawn $' + (amount)); 
                alert('Your new balance is $'+ (balance)); 
            }
          } else if (input === "D") {
            let amount = Number(prompt('Please enter the amount you are depositing'));
            balance += amount;
              alert('You have deposited $' + (amount));
              alert('Your new balance is $' + (balance));
          } else if (input === "B") {
              alert('Your current account balance is $' + (balance));
          } else {
              alert('The information is not recognized by our banking system! Please enter Q to quit. W to withdraw. D to deposit. B to view balance.' );
          }
        }

    }


