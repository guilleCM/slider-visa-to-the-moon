const data = {
  dataImages:
    [
      {
        bgImage: 'assets/images/background.jpg',
        iconTrip: 'assets/images/icon_rocket.png',
        logo: 'assets/images/logo.png',
        imageRocket: 'assets/images/rocket.png',
        imageRock: 'assets/images/rock.jpg',
        imageMoon: 'assets/images/background_moon.png',
        title: 'Visa to the Moon',
        subtitle: 'Your trip start here',
        footer: 'Explore the surface',
        hash: '#moontrip #visamoon #moontickets',
        linkprev: 'prev',
        linknext: 'next',
        easeView: 'view ease',
        button: 'Start your trip >',
        id: '1',
      },
      {
        bgImage: 'assets/images/background.jpg',
        iconTrip: 'assets/images/icon_rocket.png',
        logo: 'assets/images/logo.png',
        imageRocket: 'assets/images/rocket.png',
        imageRock: 'assets/images/rock.jpg',
        imageMoon: 'assets/images/background_moon.png',
        title: 'Visa to the Moon',
        subtitle: 'Your trip start here',
        footer: 'Explore the surface',
        hash: '#moontrip #visamoon #moontickets',
        linkprev: 'prev',
        linknext: 'next',
        easeView: 'view ease',
        button: 'Start your trip >',
        id: '2',
      },
      {
        bgImage: 'assets/images/background.jpg',
        iconTrip: 'assets/images/icon_rocket.png',
        logo: 'assets/images/logo.png',
        imageRocket: 'assets/images/rocket.png',
        imageRock: 'assets/images/rock.jpg',
        imageMoon: 'assets/images/background_moon.png',
        title: 'Visa to the Moon',
        subtitle: 'Your trip start here',
        footer: 'Explore the surface',
        hash: '#moontrip #visamoon #moontickets',
        linkprev: 'prev',
        linknext: 'next',
        easeView: 'view ease',
        button: 'Start your trip >',
        id: '3',
      },
    ],
};

export default function handler(req, res) {
  // mocked for this example, should get from a real database
  res.status(200).json(data);
}
