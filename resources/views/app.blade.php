<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @routes
    @viteReactRefresh
    @inertiaHead
    @viteReactRefresh
    @vite(['resources/css/style.css', 'resources/js/app.jsx'])
</head>
<body>
{{--<div id="app" data-page="{{json_encode($page)}}">--}}
    @inertia("app")
{{--</div>--}}
</body>
</html>
