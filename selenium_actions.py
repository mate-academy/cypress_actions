"""
Basic level:
1. Fill all fields in forms except "picture" 
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form

Advanced level:
Check next test cases:
1. Pagination 
2. Rows count selection
3. Add new worker
4. Delete worker
5. Delete all worker
6. Find worker in search field and edit it
7. Validate data in worker row after creating worker
8. Check search by all column values

https://demoqa.com/webtables
"""
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.color import Color

driver = webdriver.Chrome()
driver.get('https://demoqa.com/automation-practice-form')

first_name_field = driver.find_element_by_css_selector('#firstName')
first_name_field.send_keys('Name')

last_name_field = driver.find_element_by_css_selector('#lastName')
last_name_field.send_keys('Last')

email_field = driver.find_element_by_css_selector('#userEmail')
email_field.send_keys('123@123.com')

gender_radio = driver.find_element_by_xpath('//*[@id="genterWrapper"]/div[2]/div[1]')
gender_radio.click()

mobile_field = driver.find_element_by_css_selector('#userNumber')
mobile_field.send_keys('3809911111')

date_birth = driver.find_element_by_css_selector('#dateOfBirthInput')
date_birth.send_keys(Keys.CONTROL, 'a')
date_birth.send_keys('10/03/2000')
date_birth.send_keys(Keys.ENTER)

subjects_field = driver.find_element_by_css_selector('#subjectsInput')
subjects_field.send_keys('Arts')
subjects_field.send_keys(Keys.ENTER)

hobbies_checkbox = driver.find_element_by_xpath('//*[@id="hobbiesWrapper"]/div[2]/div[1]/label')
hobbies_checkbox.click()

current_address_field = driver.find_element_by_xpath('//*[@id="currentAddress"]')
current_address_field.send_keys('some fake address 4A Notieur')

driver.implicitly_wait(3)

state_select = driver.find_element_by_css_selector('[id="react-select-3-input"]')
state_select.send_keys(Keys.ARROW_DOWN + Keys.ENTER)


city_select = driver.find_element_by_css_selector('[id="react-select-4-input"]')
city_select.send_keys(Keys.ARROW_DOWN + Keys.ENTER)

submit_btn = driver.find_element_by_css_selector('#submit')
submit_btn.click()

driver.implicitly_wait(3)
close_modal = driver.find_element_by_css_selector('#closeLargeModal')
close_modal.click()
driver.quit()




