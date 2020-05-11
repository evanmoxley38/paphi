
const People = [
    {
        name: 'Andrew Lin',
        lineNumber: '75',
        lineName: 'Azreal',
        family: 'Prime Maintain',
        crossing: 'Nu Class',
        date: 'Fall 2018',
        grade: 'Junior',
        major: 'Engineering',
        image: require('../Images/75.png'),
    },
    {
        name: 'Jeffrey Wang',
        lineNumber: '1',
        lineName: '1mmortal',
        family: 'Dirty Defined',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Senior',
        major: 'Computer Science',
    },
    {
        name: 'Andy Hsu',
        lineNumber: '2',
        lineName: 'Terminaor',
        family: '1000 yard stare',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Senior',
        major: 'Computer Science',
        image: require('../Images/2.png')
    },
    {
        name: 'Mark Domondon',
        lineNumber: '3',
        lineName: 'Mug3n',
        family: 'Prime Maintain',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Bio something',
        image: require('../Images/3.png')
    },
    {
        name: 'Steven Lu',
        lineNumber: '4',
        lineName: 'Ascended',
        family: '151',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Bioengineering',
        image: require('../Images/4.png')
    },
    {
        name: 'Shawn Patel',
        lineNumber: '5',
        lineName: 'Thelesis',
        family: 'Emerald Knights',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Bioengineering',
        image: require('../Images/5.png')
    },
    {
        name: 'Aaron Frialde',
        lineNumber: '6',
        lineName: 'Saitama',
        family: 'Vanguard',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Basically Alumni',
        major: 'Computer Science',
        image: require('../Images/6.png')
    },
    {
        name: 'Anthony Spyropoulos',
        lineNumber: '7',
        lineName: 'Feather',
        family: 'Imperial Executives',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Biology',
        image: require('../Images/7.png')
    },
    {
        name: 'Jordan Minoda',
        lineNumber: '8',
        lineName: 'Hokage',
        family: 'Cartel Executive',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Computer Science',
        image: require('../Images/8.png')
    },
    {
        name: 'Samuel Zhou',
        lineNumber: '9',
        lineName: '9ideon',
        family: 'Prime Syndicate',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Civil Engineering',
        image: require('../Images/9.png')
    },
    {
        name: 'Dominic Marosok',
        lineNumber: '10',
        lineName: 'Dog Mind',
        family: 'Visionaries',
        crossing: 'Charter Class',
        date: 'Spring 2017',
        grade: 'Alumni',
        major: 'Bioelectircal Engineering',
        image: require('../Images/10.png')
    },
    {
        name: 'Kayed Al Dahabi',
        lineNumber: '11',
        lineName: 'A1adin',
        family: 'Prime Syndicate',
        crossing: 'Alpha Class',
        date: 'Fall 2017',
        grade: 'Alumni',
        major: 'Biology',
        image: require('../Images/11.png')
    },
    {
        name: 'Michael Thai',
        lineNumber: '12',
        lineName: 'All Might',
        family: '151',
        crossing: 'Alpha Class',
        date: 'Fall 2017',
        grade: 'Alumni',
        major: 'Architecture',
        image: require('../Images/12.png')
    },
    {
        name: 'Kevin Shrake',
        lineNumber: '13',
        lineName: 'Nobl3',
        family: '1000',
        crossing: 'Alpha Class',
        date: 'Fall 2017',
        grade: 'Alumni',
        major: 'Biology',
        image: require('../Images/13.png')
    },
    {
        name: 'Ryan Van',
        lineNumber: '14',
        lineName: 'Kairos',
        family: 'Vanguard',
        crossing: 'Alpha Class',
        date: 'Fall 2017',
        grade: 'Alumni',
        major: 'Biology',
        image: require('../Images/14.png')
    },
    {
        name: 'Emanuel Cheng',
        lineNumber: '15',
        lineName: 'Dark Horse',
        family: 'Visionaries',
        crossing: 'Alpha Class',
        date: 'Fall 2017',
        grade: 'Alumni',
        major: 'Computer Engineering',
        image: require('../Images/15.png')
    },
    {
        name: 'Dennis Daly',
        lineNumber: '16',
        lineName: 'Ripple',
        family: 'Imperial Executives',
        crossing: 'Alpha Class',
        date: 'Fall 2017',
        grade: 'Senior',
        major: 'Mechanical Engineering',
        image: require('../Images/16.png')
    },
    {
        name: 'Victor Ruan',
        lineNumber: '17',
        lineName: 'Sentinel',
        family: 'Vanguard',
        crossing: 'Beta Class',
        date: 'Fall 2018',
        grade: 'Junior',
        major: 'Electrical Engineering'
    },
    {
        name: 'Quin',
        lineNumber: '18',
        lineName: 'Wavy',
        family: '1000',
        crossing: 'Beta Class',
        date: 'Fall 2018',
        grade: 'Junior',
        major: 'Mechanical Engineering',
        image: require('../Images/18.png')
    },
    {
        name: 'Aaron Lee',
        lineNumber: '19',
        lineName: 'Debonaire',
        family: '151',
        crossing: 'Beta Class',
        date: 'Fall 2018',
        grade: 'Alumni',
        major: 'Computer Science',
        image: require('../Images/19.png')
    },
    {
        name: 'Evan Moxley',
        lineNumber: '20',
        lineName: 'Kaido',
        family: 'Cartel Executives',
        crossing: 'Beta Class',
        date: 'Fall 2018',
        grade: 'Senior',
        major: 'Computer Science',
        image: require('../Images/20.png')
    },
    {
        name: 'Xavier Smith',
        lineNumber: '21',
        lineName: 'Fox Hunt',
        family: 'Prime Syndicate',
        crossing: 'Beta Class',
        date: 'Fall 2018',
        grade: 'Senior',
        major: 'Computer Science',
        image: require('../Images/21.png')
    },
    {
        name: 'Chris Shin',
        lineNumber: '22',
        lineName: 'Diamond',
        family: '151',
        crossing: 'Gamma Class',
        date: 'Spring 2019',
        grade: 'Alumni',
        major: 'Packaging Science',
        image: require('../Images/22.png')
    },
    {
        name: 'Eli Jones',
        lineNumber: '23',
        lineName: 'Mavrick',
        family: 'Emerald Knights',
        crossing: 'Gamma Class',
        date: 'Spring 2019',
        grade: 'Senior',
        major: 'Chemical Engineering',
        image: require('../Images/23.png')
    },
    {
        name: 'Jeffrey Feaster',
        lineNumber: '24',
        lineName: 'Wolf Blood',
        family: 'Visionaries',
        crossing: 'Delta Class',
        date: 'Spring 2020',
        grade: 'Sophomore',
        major: 'Mechanical Engineering'
    },
    {
        name: 'Patrick Maclintal',
        lineNumber: '25',
        lineName: '',
        family: 'Prime Syndicate',
        crossing: 'Delta Class',
        date: 'Spring 2020',
        grade: 'Sophomore',
        major: 'PreMed'
    },
    {

        name: 'JP Paul',
        lineNumber: '26',
        lineName: 'Zenith',
        family: 'Imperial Executives',
        crossing: 'Delta Class',
        date: 'Spring 2020',
        grade: 'Sophomore',
        major: 'Biology'
    }
]

export default People