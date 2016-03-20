# JabaJS
Really simple split-testing framework for web designers to perform A/B-tests (aka split tests, multivariate testing...) without needing to know how to code. It is super quick to get started and is not meant as a coder's framework.

# Usage
Reference the jaba.min.js in yourscript section:
```
<!-- Include JQuery (local or CDN) -->
<script src="https://code.jquery.com/jquery-2.2.1.min.js" integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00=" crossorigin="anonymous"></script>
<script src="/dist/jaba.min.js"></script>
```

Add the `data-variant` attribute to the elements you want to test against, with values for A, B, ... 

```
    <div style="width: 300px; height: 300px; background-color: red;" data-variant="A">
        This is a red block
    </div>

    <div style="width: 300px; height: 300px; background-color: blue; color: white;" data-variant="B">
        This is a blue block
    </div>
```

Load JabaJS at the end of your script or inside a $(document).ready()

```
    <script type="text/javascript">
        var jaba = new Jaba();
    </script>
</body>
```
Try it out by navigating to the page with the appropriate variants in a query string v=A, v=B etc. query string
```
http://localhost/index.html?v=A
```
# Google Analytics
Add the pages as a variant in the expertiments section.

# Requirements 
This uses JQuery 2.2.x

# Support
* Send an email to hello@axelisys.co.uk
* Follow us on twitter @Axelisys

# Maintainers
* Ethar Alali, Axelisys

# Licensing model 
Copyright (c) 2016+ Ethar Alali, Axelisys. This software is licensed under the MIT License.
