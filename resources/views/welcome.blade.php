<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="refresh" content="3; url={{ url('/home') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="keyword" description="Note Application">
        <meta name="author" content="Festus Olatunbosun Oyeleye">
        <link rel="manifest" href="{{ asset('manifest.json') }}">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="theme-color" content="#2196f3">
        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }
            .img-div {
                max-width: 400px;
                position: relative;
                margin-right: auto;
                margin-left: auto;
            }
            .img-div .img {
                position: relative;
                width: 256px;
                height: 256px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    Note Application
                    <div class="img-div">
                        <img src="/note.png" class="img img-responsive" alt="">
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="/app.js" type="text/javascript"></script>
</html>
