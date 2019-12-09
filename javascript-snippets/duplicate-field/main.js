import { duplicateField } from './function.js';

const addEmployment     = new duplicateField($(".input_employment_wrap"), $(".add_employment_button"), $('#employment1').html(), "employment");
const addLicense        = new duplicateField($(".input_license_wrap"), $(".add_license_button"), $('#license1').html(), "license");
const addCertificate    = new duplicateField($(".input_certificate_wrap"), $(".add_certificate_button"), $('#certificate1').html(), "certificate");