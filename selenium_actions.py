# """
# Basic level:
# 1. Fill all fields in forms except "picture"
# 2. Click on [Submit] button
# 3. Validate inputed data in modal window
# Site: https://demoqa.com/automation-practice-form
#
# Advanced level:
# Check next test cases:
# 1. Pagination
# 2. Rows count selection
# 3. Add new worker
# 4. Delete worker
# 5. Delete all worker
# 6. Find worker in search field and edit it
# 7. Validate data in worker row after creating worker
# 8. Check search by all column values

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.action_chains import ActionChains
driver = webdriver.Chrome()
DATA = {
    'FirstName': 'Maxim',
    'LastName': 'Utrobin',
    'Email': 'ma.utrobin@gmail.com',
    'Number': '1234567890',
    'Cur_add': 'Kiev, Random str'
}
driver.get("https://demoqa.com/automation-practice-form")

name_field_first_name = driver.find_element_by_css_selector('#firstName')
name_field_first_name.send_keys(DATA['FirstName'])

name_field_last_name = driver.find_element_by_css_selector('#lastName')
name_field_last_name.send_keys(DATA['LastName'])

email_field = driver.find_element_by_css_selector('#userEmail')
email_field.send_keys(DATA['Email'])

gender = driver.find_element_by_css_selector('[for="gender-radio-3"]') # check another way
gender.click()

userNumber = driver.find_element_by_css_selector('[id="userNumber"]')
userNumber.send_keys(DATA['Number'])

date_of_birth = driver.find_element_by_css_selector('#dateOfBirthInput')
date_of_birth.click()
date_of_birth.send_keys(Keys.LEFT_CONTROL, 'a')
date_of_birth.send_keys('01 Apr 1991', Keys.ENTER)

subjects_drop_list = driver.find_element_by_css_selector('#subjectsInput')
subjects_drop_list.send_keys('C')
subjects_drop_list.send_keys(Keys.ENTER)
subjects_drop_list.send_keys('B')
subjects_drop_list.send_keys(Keys.ENTER)

hobbies_check_box = driver.find_element_by_css_selector('[for="hobbies-checkbox-1"]')
hobbies_check_box.click()

current_address_field = driver.find_element_by_css_selector('[id="currentAddress"]')
current_address_field.send_keys(DATA['Cur_add'])

move_element = driver.find_element_by_css_selector('[id="submit"]')
actions = ActionChains(driver)
actions.move_to_element(move_element).perform()

state_input = driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)

city_input = driver.find_element_by_xpath('//*[@id="react-select-4-input"]').send_keys('Delhi', Keys.ENTER)

submit_btn = driver.find_element_by_css_selector('#submit')
submit_btn.click()

assert "Thanks for submitting the form" == driver.find_element_by_css_selector("#example-modal-sizes-title-lg").text

close_btn = driver.find_element_by_css_selector('#closeLargeModal')
close_btn.click()



