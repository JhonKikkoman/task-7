/** @format */
import React, { useState } from 'react';
import moment from 'moment';

type propVideoT = {
  url: string;
  date: string;
};

type stateT = {
  url: string;
  date: string;
};

type propTimePrettyT = {
  dateTime: (str: string, arg1: string) => JSX.Element;
  date: string;
};

function DateTimePretty({ dateTime, date }: propTimePrettyT) {
  console.log(date);
  const timeCut = date.slice(10);
  const dateCut: string = moment(
    date.slice(0, 10),
    'YYYY-MM-DD',
    true
  ).fromNow();

  return dateTime(date, dateCut);
}

function DateTime(str: string, arg1: string) {
  return (
    <p className='date'>
      {str}
      <br />
      {arg1}
    </p>
  );
}

function Video(props: propVideoT) {
  return (
    <div className='video'>
      <iframe
        src={props.url}
        title={`${props.url}`}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen={true}
      ></iframe>
      <DateTimePretty dateTime={DateTime} date={props.date} />
    </div>
  );
}

function VideoList(props: any) {
  return props.list.map((item: stateT) => (
    <Video url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list, setList] = useState<stateT[]>([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00',
    },
  ]);

  return <VideoList list={list} />;
}
