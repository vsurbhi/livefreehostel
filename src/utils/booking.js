// Deep-link into the eZee booking engine at book.livefreehostels.com.
//
// The engine's own widget submits a POST with these exact hidden-field
// names — confirmed by inspecting the live booking site's network request,
// not guessed. A query-string GET is not honoured; it must be a form POST.
export function goToBooking({ bookingUrl, hotelCode, checkin, checkout, adults = 1, children = 0, rooms = 1 }) {
  const nights = Math.max(1, Math.round((new Date(checkout) - new Date(checkin)) / 86400000))

  const fields = {
    select_hotel: hotelCode,
    eZ_chkin: checkin,
    eZ_chkout: checkout,
    eZ_Nights: nights,
    eZ_adult: adults,
    eZ_child: children,
    eZ_room: rooms,
    calformat: 'dd-mm-yy',
  }

  const form = document.createElement('form')
  form.method = 'POST'
  form.action = bookingUrl
  form.target = '_blank'
  form.rel = 'noopener'
  form.style.display = 'none'

  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}
