function displayNotification(title, body) {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        var options = {
          body: body,
          icon: './img/icons/icon-72x72.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [{
              action: 'explore',
              title: 'Explore this new world',
              icon: './img/icons/icon-72x72.png'
            },
            {
              action: 'close',
              title: 'Close notification',
              icon: './img/icons/icon-72x72.png'
            },
          ]
        };
        reg.showNotification(title, options);
      });
    }
  }