"""
Basic level:
1. Fill all fields in forms except "picture"
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form
"""

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep

# Starting driver
browser = webdriver.Chrome()
actions = ActionChains(browser)
browser.maximize_window()

# Getting URL
browser.get("https://demoqa.com/automation-practice-form")

# First name field
browser.find_element_by_css_selector("#firstName").send_keys("Dmitriy")

# Last name field
browser.find_element_by_css_selector("#lastName").send_keys("Lebed")

# Email field
browser.find_element_by_css_selector("#userEmail").send_keys("up2dmas@gmail.com")

# Gender checkbox
browser.find_element_by_id("gender-radio-1").send_keys(Keys.SPACE)

# Mobile (10 digits) field
browser.find_element_by_css_selector("#userNumber").send_keys("0637997707")

# Date of Birth form
browser.find_element_by_css_selector("#dateOfBirth").click()
month_dropdown = Select(browser.find_element_by_css_selector(".react-datepicker__month-select")).select_by_value("11")
year_dropdown = Select(browser.find_element_by_css_selector(".react-datepicker__year-select")).select_by_value("1990")
date_picker = browser.find_element_by_css_selector(".react-datepicker__day--018").click()

# Subjects input
browser.find_element_by_css_selector("#subjectsInput").send_keys("Maths")
browser.find_element_by_css_selector("#subjectsInput").send_keys(Keys.TAB) # Changed from ENTER key

# Hobbies checkboxes
browser.find_element_by_id("hobbies-checkbox-1").send_keys(Keys.SPACE)
browser.find_element_by_id("hobbies-checkbox-2").send_keys(Keys.SPACE)
browser.find_element_by_id("hobbies-checkbox-3").send_keys(Keys.SPACE)

# Current address textbox
browser.find_element_by_css_selector("#currentAddress").send_keys("My address not the house, not even the street, my address is USSR.")

# Scrolling to the bottom of the page
actions.move_to_element(browser.find_element_by_css_selector(".mt-40")).perform()

# Select State dropdown
browser.find_element_by_css_selector("[id='react-select-3-input']").send_keys(Keys.ARROW_DOWN)
browser.find_element_by_css_selector("[id='react-select-3-input']").send_keys(Keys.ENTER)

# Select City dropdown
browser.find_element_by_css_selector("[id='react-select-4-input']").send_keys(Keys.ARROW_DOWN)
browser.find_element_by_css_selector("[id='react-select-4-input']").send_keys(Keys.ENTER)

# Clicking on [Submit] button
browser.find_element_by_css_selector("#submit").click()

# Checking if the form is successfully submitted
assert "Thanks for submitting the form" in browser.page_source

"""
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
